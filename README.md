<p align="center">
  <img width="186" height="90" src="https://user-images.githubusercontent.com/218949/44782765-377e7c80-ab80-11e8-9dd8-fce0e37c235b.png" alt="Beyonk" />
</p>

# **Svelte Google Analytics**

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com) [![Svelte v3](https://img.shields.io/badge/svelte-v3-blueviolet.svg)](https://svelte.dev)



### Install the package

```
npm i --save-dev @beyonk/svelte-google-analytics
```

## **Usage (Svelte Project)**
In `App.svelte`
```
import { GoogleAnalytics } from '@beyonk/svelte-google-analytics'

<GoogleAnalytics gaMeasurementId='GOOGLE ANALYTICS MEASUREMENT ID' />
```

- ### Page Tracking
Within the `onMount` of each page you would like to track
```
<script>
  import { onMount } from 'svelte'
  import { ga } from '@beyonk/svelte-google-analytics'

  onMount(() => {
    ga.pageView()
  })
</script>
```
Optional parameters.  
- page_title
- page_location
- page_path
- send_page_view

(see [Google Analytics offical docs - Pageviews](https://developers.google.com/analytics/devguides/collection/gtagjs/pages)) for more info

- ### Event Tracking

```
<script>
  import { ga } from '@beyonk/svelte-google-analytics'

  function handleClick () {
    ga.event({
      event_action: 'BUTTON CLICK',
      event_category: 'Homepage - svelte app',
      event_label: 'Add to Cart'
    })
  }
</script>

<main>
  <button on:click={handleClick}>Add to Cart</button>
</main>
```
Pass in any valid action / options.  
(see [Google Analytics offical docs - Events](https://developers.google.com/analytics/devguides/collection/gtagjs/events)) for more info.




<p>&nbsp;</p>


---

<p>&nbsp;</p>

## **Usage (Svelte/Sapper Project)**
- ### Page Tracking
In `_layout.svelte`

```
<script>
	import { onMount } from 'svelte';
	import { GoogleAnalytics, ga } from '@beyonk/svelte-google-analytics'	
	import { stores } from '@sapper/app';
	const { page } = stores()

	onMount(() => {
		const unsubscribe = page.subscribe(({path}) => {
			ga.pageView({
				page_path: path
			})
		})

		return () => {
			unsubscribe()
		}
	})
</script>

<GoogleAnalytics gaMeasurementId='GOOGLE ANALYTICS MEASUREMENT ID' />
```
You are subscribing to the page store so that every time the page path changes a new pageView object will be sent to google analytics.  This block is only required once in your project.

- ### Event Tracking
Use same method as in a Svelte project shown above.

