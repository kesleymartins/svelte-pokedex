<script>
  import Container from "./components/Container.svelte"
  import Header from "./components/Header.svelte"
  import Pokemons from "./pages/Pokemons.svelte";
  import Router from "svelte-spa-router";
  import './styles/reset.scss'

  const routes = {
    '/':  Pokemons,
  }
</script>

<Header />

<Container>
  <Router {routes} />
</Container>

