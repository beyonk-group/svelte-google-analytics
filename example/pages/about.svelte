<script>
  import { ga } from '../../src/index.js'
  import { onMount } from 'svelte'

  onMount(() => {
    ga.pageView({
      page_path: window.location.pathname
    })
  })

    let pageName="About Page";
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<main>
    <h1> {pageName}!</h1>
    <p>Welcome this is my <b>{pageName}</b></p>
</main>