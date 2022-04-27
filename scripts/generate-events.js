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

  console.log(`Loading events for ${articleId}`)

  const events = $('.nice-table > tbody > tr')
    .toArray()
    .filter(row => !row.children.find(cell => cell.name === 'th'))
    .map(row => row.children.filter(cell => cell.name === 'td'))
    .filter(cells => cells.length > 0)
    .map(([ linkCell, triggerCell ]) => {
      const link = linkCell.children[0]

      return {
        event: link.children[0].data,
        href: link.attribs.href,
        trigger: triggerCell.children[0].data
      }
    })

  return events
}

async function scrapeEvents (pages) {
  return Promise.all(
    pages.map(async ({ prefix, articleId }) => ({
      prefix,
      articleId,
      mappings: await loadPage(articleId)
    }))
  )
}

function generateEvents (loaded) {
  const generated = `/**
 * ------------------------------------------------------------
 * GENERATED FILE. DO NOT DIRECTLY EDIT
 * ------------------------------------------------------------
 **/
import { gaStore } from './store.js'

function addEvent (event, data) {
  if (!data.send_to) { delete data.send_to }
  gaStore.update(exisiting => [ ...exisiting, { type: 'event', event, data } ])
}

function setUserProperties (data) {
  gaStore.update(exisiting => [ ...exisiting, { type: 'set', event: 'user_properties', data } ])
}

function setUserId (id) {
  gaStore.update(exisiting => [ ...exisiting, { type: 'set', event: 'userId', data: id } ]);
}

function setConfig (id, config = {}) {
  gaStore.update(exisiting => [ ...exisiting, { type: 'config', event: id, data: config } ]);
}`

  const categories = loaded.map(({ prefix, articleId, mappings }) => {
    const events = mappings
      .map(e => {
        const { event, href, trigger } = e
        const eventName = camelCase(event)

        return `/**
   * ${trigger.trim()}
   * @see ${href}
   **/
  ${eventName}: function eventName (params = {}) {
    addEvent('${event}', params)
  }`
      })

    return `/**
 * ${prefix} events
 * @see ${docsUrl}/${articleId}
 **/
const ${prefix} = {
  ${events.join(',\n\n  ')}
}`
  })

  const groups = loaded.map(({ prefix }) => prefix).join(',\n  ')

  return `${generated}

${categories.join('\n\n')}

export {
  addEvent,
  setUserProperties,
  setUserId,
  setConfig,
  ${groups}
}
`
}

scrapeEvents(helpArticles)
  .then(eventMappings => generateEvents(eventMappings))
  .then(js => writeFileSync(join('src', 'generated-functions.js'), js))
