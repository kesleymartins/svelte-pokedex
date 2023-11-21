<script>
  import { pokemons, loadPokemons } from "../../stores/pokeapi";
  import { onMount } from "svelte";
  import Card from "./Card.svelte";
  import Pagination from "./Pagination.svelte";

  onMount(() => {
    loadPokemons();
  });
</script>

<div class="cards">
  {#each $pokemons as pokemon}
    <Card {pokemon} />
  {/each}
</div>

<Pagination />

<style type="scss">
  .cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 2em 0;
  }
</style>
