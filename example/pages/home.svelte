<script>
  import { ga } from '../../src/index.js'
  import { onMount } from 'svelte'

  onMount(() => {
    ga.pageView({
      page_path: window.location.pathname,
      page_title: 'homepage - svelte app'
    })
  })

  let pageName="Home Page";

  function handleClick () {
    ga.event({
      event_action: 'BUTTON CLICK',
      event_category: 'Homepage - svelte app',
      event_label: 'Add to Cart'
    })
  }
</script>



<main>
    <h1> {pageName}!</h1>
    <p>Welcome this is my <b>{pageName}</b></p>

    <button on:click={handleClick}>Add to Cart</button>
</main>