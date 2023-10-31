<script>

</script>

<div class="doc_page">
    <slot />
</div>
    
<style lang="scss">
    :global(.doc_page){
    width: 100%;
    padding: 140px var(--gutter) 60px var(--gutter);
    display: flex;
    flex-direction: column;
    :global(h1){
        font-size: 38px;
        font-weight: 600;
        margin-bottom: 40px;
    }
    :global(h2){
        font-size: 22px;
        font-weight: 600;
        margin-bottom: 14px;
    }
    :global(.intro){
        font-weight: 600;
        margin-bottom: 40px;
    }
    :global(strong){
        font-weight: 600;
    }
    :global(a){
        font-weight: 600;
        color: var(--hilight1);
    }
    :global(p){
        margin-bottom: 30px;
    }
}

@media (max-width: 1400px) {
    :global(.doc_page){
        padding: 110px var(--tablet_gutter) 60px var(--tablet_gutter);
    }
}

@media (max-width: 992px) {
    :global(.doc_page){
        padding: 110px var(--mobile_gutter) 40px var(--mobile_gutter);
    }
}
</style>