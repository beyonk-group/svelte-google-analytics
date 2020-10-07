<script>
  import { onMount } from 'svelte'
  import loader from '@beyonk/async-script-loader'
  import { gaStore } from './store.js'

  export let gaMeasurementId

  onMount(() => {
    loader([
      { type: 'script', url: `//www.googletagmanager.com/gtag/js?id=${gaMeasurementId}` }
    ],
    test,
    callback
    )
  })

  function test () {
    return Boolean(window.dataLayer).valueOf() && Array.isArray(window.dataLayer)
  }

  function callback () {
    gtag('js', new Date())

    return gaStore.subscribe(queue => {
      let next = queue.length && queue.shift()
      let action

      while (next) {
        switch (next.type) {
          case 'config':
            gtag(next.type, gaMeasurementId, next.data)
            break
          case 'event':
            action = next.data.event_action
            delete next.data.event_action
            gtag(next.type, action, next.data)
            break
        }

        next = queue.shift()
      }
    })
  }

  function gtag () {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push(arguments)
  }
</script>