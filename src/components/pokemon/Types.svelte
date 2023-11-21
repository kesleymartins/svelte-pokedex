<script>
  export let types;
</script>

<ul>
  {#each types as { type }}
    <li>
      <span class="tag {type.name}">
        {type.name}
      </span>
    </li>
  {/each}
</ul>

<style type="scss">
  @use "../../styles/tags";
  @use "../../styles/fonts";

  ul {
    display: flex;
    justify-content: center;

    li {
      margin: 0 2px;

      span {
        font-family: "Open Sans";
      }
    }
  }
</style>
