<script>
    import { Heart, Shoe, Shield, Sword } from "tabler-icons-svelte";

    export let stats

    console.log(stats[0]);
</script>

<div class="stats">
    {#each stats as stat}
        {#if stat.stat.name === 'hp'}
            <div class="stat {stat.stat.name}">    
                <Heart size="1em" />
                <span class="{stat.stat.name}">{stat.base_stat}</span>
            </div>
        {/if}
        
        {#if stat.stat.name === 'attack'}
            <div class="stat {stat.stat.name}">    
                <Sword size="1em" />
                <span class="{stat.stat.name}">{stat.base_stat}</span>
            </div>
        {/if}
        
        {#if stat.stat.name === 'defense'}
            <div class="stat {stat.stat.name}">    
                <Shield size="1em" />
                <span class="{stat.stat.name}">{stat.base_stat}</span>
            </div>
        {/if}
        
        {#if stat.stat.name === 'speed'}
            <div class="stat {stat.stat.name}">    
                <Shoe size="1em" />
                <span>{stat.base_stat}</span>
            </div>
        {/if}
    {/each}
</div>


<style type="scss">
    .stats {
        display: flex;
        justify-content: space-around;
        margin-top: 1.2em;

        .stat {
            border-bottom: 1px solid black;
            border-radius: 5px;
            color: black;
            padding: 0 5px;
        }

        // .hp {
        //     background-color: red;
        // }
        
        // .attack {
        //     background-color: #82CD47;
        //     color: #4E6C50;
        // }
        
        // .defense {
        //     background-color: brown;
        //     color: white;
        // }

        // .speed {
        //     background-color: blue;
        //     color: white;
        // }
    }
</style>