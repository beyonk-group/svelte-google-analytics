<script>
  import { onMount } from 'svelte'
  import loader from '@beyonk/async-script-loader'
  import { gaStore } from './store.js'

  export let properties
  export let configurations = {}
  export let enabled = true

  onMount(() => {
    if (!enabled) { return }
    init()
  })

  export function init () {
    const mainProperty = properties[0]
    loader([
      {
        type: 'script',
        url: `//www.googletagmanager.com/gtag/js?id=${mainProperty}`
      }
    ],
    test,
    callback
    )
  }

  function test () {
    return Boolean(window.dataLayer).valueOf() && Array.isArray(window.dataLayer)
  }

  function gtag () {
    window.dataLayer.push(arguments)
  }

  function callback () {
    window.dataLayer = window.dataLayer || []
    gtag('js', new Date())
    properties.forEach(p => {
      gtag('config', p, configurations[p] || {})
    })

    return gaStore.subscribe(queue => {
      let next = queue.length && queue.shift()

      while (next) {
        const { type, event, data } = next
        gtag(type, event, data)
        next = queue.shift()
      }
    })
  }
</script>