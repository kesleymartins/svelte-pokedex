<script>
  import Container from "./components/Container.svelte"
  import Footer from './components/Footer.svelte'
  import Header from "./components/Header.svelte"
  import Pokemons from "./pages/Pokemons.svelte";
  import About from "./pages/About.svelte";
  import Router from "svelte-spa-router";
  import './styles/reset.scss'

  const routes = {
    '/':  Pokemons,
    '/about': About
  }
</script>

<Header />

<Container>
  <Router {routes} />
</Container>

<Footer />