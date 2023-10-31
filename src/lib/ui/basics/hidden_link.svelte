<script>
    /**
     * Put inside a div (without static position) to make the whole element a link. Label is hidden but good for accessibility.
     */

    export let url    = 'https://www.wikipedia.org/';
    export let label  = '-';
    export let target = '_self';
</script>

<a href="{url}" target="{target}">{label}</a>

<style>
    a{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        z-index: 1;
    }
</style>