<script>
  import { ga } from '../../src/index.js'
  import { onMount } from 'svelte'

  onMount(() => {
    ga.pageView({
      page_path: window.location.pathname
    })
  })

  function handleClick (buttonText) {
    ga.event({
      event_category: 'on site navigation',
      event_action: 'Click - Homepage main menu',
      event_label: buttonText
    })
  }
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<main>
    <h1>Home Page</h1>
    <p>Welcome this is my website</p>

    <button on:click={(e) => handleClick(e.target.innerText)}>Add to Cart</button>
    <button on:click={(e) => handleClick(e.target.innerText)}>Contact</button>
    <button on:click={(e) => handleClick('blog alternative label')}>blog</button>
</main>