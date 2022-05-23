<a href="https://beyonk.com">
    <br />
    <br />
    <img src="https://user-images.githubusercontent.com/218949/144224348-1b3a20d5-d68e-4a7a-b6ac-6946f19f4a86.png" width="198" />
    <br />
    <br />
</a>

# **Svelte Google Analytics**

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com) [![Svelte v3](https://img.shields.io/badge/svelte-v3-blueviolet.svg)](https://svelte.dev)

Supports Google Analytics v4!

## Install the package

```bash
pnpm i --save-dev @beyonk/svelte-google-analytics
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

If you disable tracking by default, for instance, due to [GDPR](https://github.com/beyonk-adventures/gdpr-cookie-consent-banner), then you can enable it later by calling `init()` on your component:

```svelte
<GoogleAnalytics
    bind:this={ga}
    properties={[ 'id-1' ]}
    enabled={false} />

<script>
  function enableAnalytics () {
    ga.init()
  }
</script>
```

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
    ga.games.earnVirtualCurrency('SvelteBucks', 50)
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
ga.games.earnVirtualCurrency('SvelteBucks', 50, 'Property Id B')
```

#### Set User Properties
To split user to different segment, such as language preference or geographic location, set the Properties with `setUserProperties` and setup custom dimension on Google Analytics dashboard. For more information see [Google Analytics Documentation](https://developers.google.com/analytics/devguides/collection/ga4/user-properties).

```js
ga.setUserProperties({
  favorite_composer: 'Mahler',
  favorite_instrument: 'double bass',
  season_ticketholder: 'true'
})
```

#### Set User Id
To identify user inside GA and link their sessions together, set the Properties with `setUserId`.

```js
ga.setUserId('user_id_here')
```


#### Set config
To add a Google Analytics ID after initialization call the `setConfig` and pass optional configuration options.

```js
ga.setConfig('ga_id', opts)
```
