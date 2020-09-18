<script>
  import { onMount } from 'svelte'
  import loader from '@beyonk/async-script-loader'
  import { gaStore } from './store.js'

  export let gaMeasurementId

  function gtag () {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push(arguments)
  }

  function test () {
    return Boolean(window.dataLayer).valueOf()
  }

  function callback () {
    console.log('callback')
    gtag('js', new Date())

    gaStore.subscribe(queue => {
      let running = true
      let action

      while (running) {
        const item = queue.pop()

        switch (item.type) {
          case ('config'):
            gtag(item.type, gaMeasurementId, item.data)
            console.log('page view sent to GA', item.data)
            break
          case ('event'):
            action = item.data.event_action
            delete item.data.event_action
            gtag(item.type, action, item.data)
            console.log('event sent to GA', item.data)
            break
        }

        if (!queue.length) {
          running = false
        }
      }
    })
  }

  onMount(() => {
    loader([
      { type: 'script', url: `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}` }
    ],
    test,
    callback
    )
  })

</script>