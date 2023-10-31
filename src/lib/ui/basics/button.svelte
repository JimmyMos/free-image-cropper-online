<script>
    import Hidden_link from '$lib/ui/basics/hidden_link.svelte';
    //
    export let url    = 'https://www.wikipedia.org/';
    export let label  = 'My button';
    export let target = '_self';
    export let isLink = true;
    //
</script>

<div class="button">
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
    border-radius: 6px;
    padding: 8px 12px;
    transition: var(--transition1);
    box-shadow: var(--boxshadow1);
    background: var(--purple2);
    width: fit-content;
    cursor: pointer;
    &:hover{
        transform: translateY(-4px);
    }
    span{
        color: var(--white1);
        font-weight: 500;
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