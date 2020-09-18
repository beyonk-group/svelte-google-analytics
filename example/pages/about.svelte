<script>
  import { ga } from '../../src/index.js'
  import { onMount } from 'svelte'

  onMount(() => {
    ga.pageView({
      page_path: window.location.pathname,
      page_title: 'aboutpage - svelte app'
    })
  })

    let pageName="About Page";
</script>

<main>
    <h1> {pageName}!</h1>
    <p>Welcome this is my <b>{pageName}</b></p>
</main>