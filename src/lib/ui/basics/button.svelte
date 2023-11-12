<script>
    import Hidden_link from '$lib/ui/basics/hidden_link.svelte';
    import Svg from '$lib/ui/basics/svg.svelte';
    //
    export let id     = '';
    export let css_classes = '';
    export let url    = 'https://www.wikipedia.org/';
    export let label  = 'My button';
    export let target = '_self';
    export let isLink = true;
    export let icon   = '';
    //
</script>

<div id={id} class="button {css_classes}">
    {#if icon.length > 0}
    <Svg icon="{icon}"/>
    {/if}
    <span>{label}</span>
    {#if isLink === true}
    <Hidden_link url={url} label={label} target={target}/>
    {/if}
</div>

<style lang="scss">
.button{
    position: relative;
    display: flex;
    align-items: center;
    background-color: transparent;
    border-radius: 2px;
    padding: 8px 12px;
    transition: var(--transition1);
    box-shadow: var(--boxshadow1);
    background: var(--purple1);
    width: fit-content;
    cursor: pointer;
    &:hover{
        background: var(--purple5);
    }
    span{
        color: var(--white1);
        font-weight: 500;
        line-height: 1;
    }
    :global(svg){
        fill: var(--font_color);
        margin-right: 14px;
    }
    &:global(.icon_button svg){
        margin-right: 0;
    }
    &:global(.forbidden_button){
        cursor: not-allowed;
        background-color: #36393c;
        :global(a){
            cursor: not-allowed;
        }
    }
    &:global(.click_me){
        transform: translateY(0%) scale(100%);
        animation-name: click_me;
        animation-duration: 1.5s;
        animation-iteration-count: infinite
    }
}

@media (max-width: 700px) {
    .button{
        span{
            font-size: 14px;
        }
    }
}
</style>