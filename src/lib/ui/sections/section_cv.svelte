<script>
    // I don't really understand how I did to center the button on the left so please don't change the values or it will kill the alignment
    import { t } from '$lib/languages/translations';
    //
    import Section from '$lib/ui/sections/_base.svelte';
    import Hidden_link from "$lib/ui/basics/hidden_link.svelte";
    import Col from "$lib/ui/timeline/timeline_col.svelte";
    import Card from "$lib/ui/timeline/timeline_card.svelte";
</script>

<Section id="section_cv" pretitle={$t('c.cv_pretitle')} title={$t('c.cv_title')}>
    <div class="cv_wrapper">
        <Col pretitle="2020 - 2023" title={$t('c.cv_experiences')}>
            <Card 
                logo="/img/logos/vyzyo.png"
                title={$t('c.cv_1_title')}
                subtitle={`FINAVAS (2022 - ${$t('c.currently_employed')})`}
                content={$t('c.cv_1_content')}
                url="https://www.vyzyo.com/"
            />
            <Card 
                logo="/img/logos/tf.png"
                title={$t('c.cv_2_title')}
                subtitle="Trafic Factory (2020 - 2021)"
                content={$t('c.cv_2_content')}
                url="https://www.trafic-factory-referencement.fr/"
            />
        </Col>
        <Col pretitle="2017 - 2022" title={$t('c.cv_studies')}>
            <Card 
                logo="/img/logos/ga4_squared.png"
                title={$t('c.ga4_certif')}
                subtitle={$t('c.sept_2022')}
                content={$t('c.ga4_certif_desc')}
                url="https://skillshop.credential.net/3db8199c-24a2-4655-93ee-869d35a84db7"
            />
            <Card 
                logo="/img/logos/logo_hetic.svg"
                title={$t('c.cv_3_title')}
                subtitle="Hetic, la Grande École du Web (2018 - 2021)"
                content={$t('c.cv_3_content')}
                url="https://www.hetic.net/"
            />
            <Card 
                logo="/img/logos/stephenson.png"
                title={$t('c.cv_4_title')}
                subtitle="CFA Stephenson (2017 - 2018)"
                content={$t('c.cv_4_content')}
                url="https://stephenson-formation.fr/"
            />
        </Col>
    </div>
</Section>

<style  lang="scss">
.cv_wrapper{
    display: flex;
}

@media (max-width: 1200px) {
    .cv_wrapper{
        flex-direction: column;
        gap: 40px;
    }
}
</style>