<script>
    const currentYear = new Date().getFullYear()
</script>

<footer>
    <span>Kesley Martins | Fullstack Developer | {currentYear}</span>
</footer>

<style type="scss">
    @use '../styles/color';
    @use "../styles/background" as bg;
    @use "../styles/fonts";

    footer {
        position: absolute;
        width: 100%;
        padding: 1em;
        bottom: 0;
        margin-top: 1em;

        display: flex;
        justify-content: center;

        background-color: bg.$primary;
        color: color.$secondary;

        span {
            font-family: 'Open Sans';
        }
    }
</style>