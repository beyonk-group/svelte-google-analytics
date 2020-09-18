<p align="center">
  <img width="186" height="90" src="https://user-images.githubusercontent.com/218949/44782765-377e7c80-ab80-11e8-9dd8-fce0e37c235b.png" alt="Beyonk" />
</p>

## Svelte Steps

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com) [![Svelte v3](https://img.shields.io/badge/svelte-v3-blueviolet.svg)](https://svelte.dev) ![publish](https://github.com/beyonk-adventures/svelte-steps/workflows/publish/badge.svg)

Svelte Steps component

## Demo

A [hosted demo exists](https://svelte.dev/repl/c3a67f7c8df047f484a5dd717ac59f16?version=3.24.1)

```
npm i && npm run dev
```

## About

Demonstrates progress in a multi-step process in your application, such as a payment flow.

* Current step is denoted by the `current` variabble
* If the current step is the last step, the steps component shows as fully complete.

## Usage

Install the library

```
npm i --save-dev @beyonk/svelte-steps
```

See the `example` directory for an example.

1. Import the `Steps` component and the `setup` function from the library.
1. Configure the `Steps` component by passing an array of step names and icons
1. Configure the `theme` option by setting an rgb colour value for the `complete` theme variable
1. Set the current step by passing it's array index. Usually 0.
1. Add the `<Steps>` component to your page, and pass it the theme, and the current attributes.

```
<Steps {theme} />

<script>
	import { Steps, setup, current } from '@beyonk/svelte-steps'
	import { UserIcon, CreditCardIcon, BriefcaseIcon } from 'svelte-feather-icons'
	
	setup([
		{ name: 'About You', icon: UserIcon },
		{ name: 'Payment', icon: CreditCardIcon },
		{ name: 'Confirmation', icon: BriefcaseIcon }
	])
	
	const theme = [
		{ name: 'complete', value: { r: 6, g: 160, b: 146 } }
	]
</script>
```

## API

### Change Step

To change the step, set the value of the `current` store.

```
<Steps {theme} />

<script>
	import { current } from '@beyonk/svelte-steps'
	
	$current = 3 // or current.set(3)
</script>
```

### Add a Step dynamically

#### At a specified position

To add a new step, pass it to the `addStep` method:

`addStep(step, position)`

```
<script>
	import { addStep } from '@beyonk/svelte-steps'
	import { StarIcon } from 'svelte-feather-icons'
	
	addStep({ name: 'New Step', icon: StarIcon }, 2)
</script>
```

#### At the current position

To add a new step at the current position, don't pass the position attribute.

`addStep(step)`

```
<script>
	import { addStep } from '@beyonk/svelte-steps'
	import { StarIcon } from 'svelte-feather-icons'
	
	addStep({ name: 'New Step', icon: StarIcon })
</script>
```

### Remove a Step dynamically

#### At a specified position

To add a new step, use the `removeStep` function

`removeStep(position)`

```
<script>
	import { removeStep } from '@beyonk/svelte-steps'
	
	removeStep(2)
</script>
```

### Get Total Steps

The total store contains the total number of steps.

```
Total Steps: {$total}

<script>
	import { total } from '@beyonk/svelte-steps'
</script>
```

### Get Current Steps

The current store contains the current step.

```
Current Steps: {$current}

<script>
	import { current } from '@beyonk/svelte-steps'
</script>
```

## Events

The step icons dispatch a `step` event when clicked, and the event's `details.step` contains the index of the step which was clicked.
