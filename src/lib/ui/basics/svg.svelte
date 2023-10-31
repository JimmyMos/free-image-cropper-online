<script>
    /**
     * To make it work in the svg file:
     * 1. Add id="svg" to your svg file on the svg element.
     * 2. Delete width and height attributes to be able to override them with css.
     * 3. Delete all fill attributes to be able to override them with css.
     */

    export let icon        = '';
    export let css_classes = '';
    //
</script>

<svg class="svg {css_classes}">
    <use href="{icon}#svg"></use>
</svg>

<style>
svg{
    height: 20px;
    width: 20px;
    fill: var(--black1);
    transition: 250ms;
}
</style>