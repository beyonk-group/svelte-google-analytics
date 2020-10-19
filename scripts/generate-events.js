'use strict'

const fetch = require('node-fetch')
const cheerio = require('cheerio')
const { join } = require('path')
const { writeFileSync } = require('fs')
const camelCase = require('just-camel-case')

const docsUrl = 'https://support.google.com/analytics/answer'
const helpArticles = [
  { prefix: 'all', articleId: '9267735' },
  { prefix: 'ecommerce', articleId: '9268036' },
  { prefix: 'retail', articleId: '9268037' },
  { prefix: 'travel', articleId: '9267738' },
  { prefix: 'games', articleId: '9267565' }
]

async function loadPage (articleId) {
  const article = await fetch(`${docsUrl}/${articleId}`)
  const html = await article.text()

  const $ = cheerio.load(html)

  return $('.nice-table tbody')
    .children()
    .filter(i => i !== 0)
    .map((i, tr) => {
      const [ event, trigger, parameters ] = tr
        .children
        .filter(node => node.type === 'tag')

      const params = parameters.children[0].data

      return {
        event: event.children[0].data,
        trigger: trigger.children[0].data,
        parameters: params === 'No parameters' ? [] : [ ...params.split(',').map(p => p.trim()), 'send_to' ]
      }
    })
    .toArray()
}

async function scrapeEvents (pages) {
  return Promise.all(pages.map(async ({ prefix, articleId }) => ({ prefix, articleId, mappings: await loadPage(articleId) })))
}

function generateEvents (loaded) {
  const generated = `import { gaStore } from './store.js'
  function addEvent (event, data) {
    if (!data.send_to) { delete data.send_to }
    gaStore.update(exisiting => [ ...exisiting, { event, data } ])
  }
`

  const categories = loaded.map(({ prefix, articleId, mappings }) => {
    const events = mappings
      .map(e => {
        const { event, trigger, parameters } = e
        const params = parameters.join(', ')
        const eventName = camelCase(event)

        return `/**
          * ${trigger.trim()}
          **/
          ${eventName}: function eventName (${params}) {
            addEvent('${event}', { ${params} })
          }`
      })

    return `
      /**
       * ${prefix} events
       * ${docsUrl}/${articleId}
       * **/
      const ${prefix} = { ${events.join(',')} }
    `
  })

  const groups = loaded.map(({ prefix }) => prefix).join(',\n')
  return `
    ${generated}${categories.join('\n')}
    export {
      addEvent,
      ${groups}
    }
  `
}

scrapeEvents(helpArticles)
  .then(eventMappings => generateEvents(eventMappings))
  .then(js => writeFileSync(join('src', 'generated-functions.js'), js))
