<script>
    import { link } from "svelte-spa-router";
</script>

<header>
    <div>
        <h1>Svelte Pokedex</h1>
    </div>

    <div>
        <nav>
            <ul>
                <li>
                    <a href="/" use:link>Pokemons</a>
                </li>
                <li>
                    <a href="/about" use:link>Sobre</a>
                </li>
            </ul>
        </nav>
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

        nav ul {
            display: flex;

            li {
                margin: 0 .5em;
            }

            li a {
                font-size: 1.1em;
                color: color.$primary;
                text-decoration: none;
                font-family: 'Open Sans';
                
                transition: 200ms ease-in-out; 
            }

            li a:hover {
                font-size: 1.3em;
                text-decoration: underline;
            }
        }
    }
</style>