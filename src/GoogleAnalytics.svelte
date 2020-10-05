<script>
  import { onMount } from 'svelte'
  import loader from '@beyonk/async-script-loader'
  import { gaStore } from './store.js'

  export let gaMeasurementId

  onMount(() => {
    if (!gaMeasurementId) {
      console.error('svelte-google-analytics | gaMeasurementId must be defined')
      return false
    }
    
    loader([
      { type: 'script', url: `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}` }
    ],
    test,
    callback
    )
  })

  function test () {
    return Boolean(window.dataLayer).valueOf()
  }

  function callback () {
    gtag('js', new Date())

    gaStore.subscribe(queue => {
      let running = true

      while (running) {
        if (!queue.length) {
          running = false
        } else {
          const item = queue.pop()
          switch (item.type) {
          case ('config'):
            gtag(item.type, gaMeasurementId, item.data)
            break
          case ('event'):
            const action = item.data.event_action
            delete item.data.event_action
            gtag(item.type, action, item.data)
            break
          }
        }
      }
    })
  }

  function gtag () {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push(arguments)
  }

</script>
