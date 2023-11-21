<script>
  import Types from "./Types.svelte";
  import Stats from "./Stats.svelte";

  export let pokemon;
</script>

<div class="card">
  {#await pokemon then pokeData}
    <section class="header">
      <h3>{pokeData.order} - {pokeData.name}</h3>
    </section>

    <section class="picture">
      <img src={pokeData.image} alt={pokeData.name} />
    </section>

    <section>
      <Types types={pokeData.types} />

      <Stats stats={pokeData.stats} />
    </section>
  {/await}
</div>

<style type="scss">
  @use "../../styles/fonts";

  .card {
    margin: 0.4em;
    width: 15em;
    padding: 10px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);

    .header {
      text-align: center;
      text-transform: capitalize;
      font-family: Lato;
    }

    .picture {
      text-align: center;

      img {
        height: 100px;
        margin: 1.5em 0;
      }
    }
  }
</style>

