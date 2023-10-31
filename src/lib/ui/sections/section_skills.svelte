<script>
    import { t } from '$lib/languages/translations';
    //
    import Section from '$lib/ui/sections/_base.svelte';
</script>

<Section id="section_skills" pretitle={$t('c.skills_pretitle')} title={$t('c.skills_title')}>
    <div class="cards_wrapper">
        <slot />
    </div>
</Section>

<style  lang="scss">
.cards_wrapper{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(auto-fill, auto);
    grid-row-gap: 38px;
    grid-column-gap: 38px;
}

@media (max-width: 1200px) {
    .cards_wrapper{
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 700px) {
    .cards_wrapper{
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>