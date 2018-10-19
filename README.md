<p align="center">
  <img width="186" height="90" src="https://user-images.githubusercontent.com/218949/44782765-377e7c80-ab80-11e8-9dd8-fce0e37c235b.png" alt="Beyonk" />
</p>

## Svelte Google Analytics Component

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com) [![CircleCI](https://circleci.com/gh/beyonk-adventures/svelte-google-analytics.svg?style=shield)](https://circleci.com/gh/beyonk-adventures/svelte-google-analytics)


Google Analytics component for Svelte.

## Install

```bash
$ npm install --save-dev @beyonk/svelte-google-analytics
```

## Usage

```html
<GoogleAnalytics ref:ga {...gaOptions} />

<script>
  import GoogleAnalytics from '@beyonk/svelte-google-analytics'

	export default {
		data () {
			return {
				gaOptions: {
					trackingId: 123
				}
			}
		},
		
		components: {
			GoogleAnalytics
		}
	}
</script>
```

You can import GoogleAnalytics component whenever and wherever you want, the google analytics code is only initialised in the first instance.

### Tracking

Just call the send method:

```html
<GoogleAnalytics ref:ga />

<script>
  import GoogleAnalytics from '@beyonk/svelte-google-analytics'

	export default {
		components: {
			GoogleAnalytics
    }
    
    oncreate () {
      this.refs.ga.send({ eventLabel: 'blah.ogv' })
    }
	}
</script>
```

### Other events

Simply call the query method for things you need to track.

```js
this.refs.ga.query('something', {
	some: 'thing'
})
```

### Plugins

You can add custom plugins to the component:

```js
function MyPlugin () {

}

this.refs.ga.plugin('my-plugin-name', MyPlugin)
```

## Disabling Google Analytics (for GDPR)

If you'd like to install the pixel disabled, and enable it later after the user has consented to its use, you can do so by setting `enabled: false` in the pixel configuration:

```js
gaOptions: {
  trackingId: 123,
  enabled: false
}
```

Now, in your component, you can call the following in order to start google analytics and track the current page.

```js
this.refs.fb.enable()
```

## Module options

List of possible options in the module:

| Option     | Default  | Required | Description                                                                               |
|------------|----------|----------|-------------------------------------------------------------------------------------------|
| trackingId | null     | true     | Your Google Analytics tracking code                                                       |
| version    | v3.1     | false    | Tracking js version.                                                                      |
| enabled    | true     | false    | Disable Google Analytics by default when initialized. Can be enabled later with  `<component>.enable()`. |

## License

[MIT License](./LICENSE)
