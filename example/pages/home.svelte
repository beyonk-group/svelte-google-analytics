<script>
  import { ga } from '../../src/index.js'
  import { onMount } from 'svelte'

  onMount(() => {
    ga.pageView({
      page_path: window.location.pathname
    })
  })

  function handleClick () {
    ga.event({
      event_action: 'BUTTON CLICK',
      event_category: 'Homepage - svelte app',
      event_label: 'Add to Cart'
    })
  }
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<main>
    <h1>Home Page</h1>
    <p>Welcome this is my website</p>

    <button on:click={handleClick}>Add to Cart</button>
</main>