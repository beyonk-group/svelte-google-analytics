<script>
  import { ga } from '../../src/index.js'
  const { ecommerce, games } = ga

  const currency = 'SvelteBucks'
  const items = [ { id: 'prd-1', name: 'Svelte Swag', quantity: 1, price: 10 } ]
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<main>
  <h1>Home Page</h1>
  <p>Welcome this is my website</p>

  <button on:click={e => games.earnVirtualCurrency(currency, 50)}>Earn 50 SvelteBucks</button>
  <button on:click={e => ecommerce.addToCart(currency, items, 10)}>Add Swag to Cart</button>
  <button on:click={e => ecommerce.purchase('you', 'coupon-1', currency, items, `txn-${new Date().getTime()}`, 0, 0, 10)}>Purchase Swag</button>
</main>