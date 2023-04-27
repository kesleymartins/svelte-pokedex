<script>
    import { link } from "svelte-spa-router";
</script>

<header>
    <div>
        <h1>Svelte Pokedex</h1>
    </div>
</header>

<style type="scss">
    @use "../styles/color";
    @use "../styles/background" as bg;
    @use "../styles/fonts";

    header {
        display: flex;
        justify-content: space-around;
        padding: 1em;

        background-color: bg.$primary;
        color: color.$primary;

        h1 {
            font-family: 'Lato';
            font-size: 2em;
        }
    }
</style>
