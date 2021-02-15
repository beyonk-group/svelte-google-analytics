<p align="center">
  <img width="186" height="90" src="https://user-images.githubusercontent.com/218949/44782765-377e7c80-ab80-11e8-9dd8-fce0e37c235b.png" alt="Beyonk" />
</p>

# **Svelte Google Analytics**

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com) [![Svelte v3](https://img.shields.io/badge/svelte-v3-blueviolet.svg)](https://svelte.dev)

Supports Google Analytics v4!

## Install the package

```bash
npm i --save-dev @beyonk/svelte-google-analytics
```

## **Usage**
In `App.svelte`
```svelte
import { GoogleAnalytics } from '@beyonk/svelte-google-analytics'

<GoogleAnalytics properties={[ 'google property id A', ...'google property id X' ]} />
```
Component accepts two additional properties: `enabled` and `configurations`.
### The `configurations` property (optional)
`configurations` props which accepts an object type with configurations for the properties. The key in this object is the id of the property.  
Example on disabling automatic pageviews for the `id-1` property: 

```svelte
<GoogleAnalytics 
    properties={[ 'id-1' ]} 
    configurations={{ 'id-1': { 'send_page_view': false } }} />
```

### The `enabled` property (optional)
The `enabled` prop set to `true` by default.
Logic can be added here to disable/enable analytics.

### Page Tracking
With Google Analytics v4, most basic events are automatic. See [the docs](https://support.google.com/analytics/answer/9234069)

(see [Google Analytics offical docs - Pageviews](https://developers.google.com/analytics/devguides/collection/gtagjs/pages)) for more info
<p>&nbsp;</p>

### Event Tracking

All [events specified in the documentation](https://support.google.com/analytics/answer/9267735?hl=en&ref_topic=9756175) are implemeneted (generated automatically from scraping the docs pages and building the project!)

```svelte
<script>
  import { ga } from '@beyonk/svelte-google-analytics'

  function handleClick () {
    ga.earnVirtualCurrency('SvelteBucks', 50)
  }
</script>

<main>
  <button on:click={handleClick}>Get 50 SvelteBucks</button>
</main>
```

#### Custom Events

Custom events can be tracked with `addEvent`:

```svelte
<script>
  import { ga } from '@beyonk/svelte-google-analytics'

  function handleClick () {
    ga.addEvent('event_name', {
      foo: 'bar',
      baz: 'qux'
    })
  }
</script>
```


#### Multiple Properties

To send an event to a different property, specify the property id as the last parameter to the event: `send_to`.

```js
ga.earnVirtualCurrency('SvelteBucks', 50, 'Property Id B')
```
