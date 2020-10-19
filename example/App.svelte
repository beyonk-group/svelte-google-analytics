<script>
  import { GoogleAnalytics } from '../src/index.js'
  import { Router, Route, Link } from "svelte-routing"
  import Home from "./pages/home.svelte"
  import About from "./pages/about.svelte"
  export let url = ""
</script>

<GoogleAnalytics properties={[ 'G-1J8KHKSV5V' ]} />
 
<Router {url}>
 <nav>
    <Link to="/">Home</Link>
    <Link to="about">About</Link>
  </nav>
  <div>
    <Route path="about" component="{About}" /> 
    <Route path="/"><Home /></Route>
  </div>
</Router>

