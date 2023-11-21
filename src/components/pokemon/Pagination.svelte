<script>
  import { ArrowNarrowLeft, ArrowNarrowRight } from "tabler-icons-svelte";
  import { pagination, nextPage, previousPage } from "../../stores/pokeapi";

  let page = 1;

  const handleNextPage = () => {
    nextPage($pagination.next);
    ++page;
  };

  const handlePreviousPage = () => {
    previousPage($pagination.previous);
    --page;
  };
</script>

<div>
  {#if $pagination.previous}
    <button class="mini-card" on:click={handlePreviousPage}>
      <ArrowNarrowLeft />
    </button>
  {/if}

  <span class="mini-card">{page}</span>

  {#if $pagination.next}
    <button class="mini-card" on:click={handleNextPage}>
      <ArrowNarrowRight />
    </button>
  {/if}
</div>

<style type="scss">
  @use "../../styles/fonts";

  div {
    display: flex;
    justify-content: center;
  }

  span {
    font-size: 1.5em;
    font-family: "Open Sans";
  }

  button {
    cursor: pointer;
  }

  .mini-card {
    margin: 0 5px;
    border: none;
    padding: 2px 10px;
    text-align: center;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  }
</style>

