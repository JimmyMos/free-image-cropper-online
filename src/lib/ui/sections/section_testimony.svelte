<script>
    import { t } from '$lib/languages/translations';
    //
    import Section  from "$lib/ui/sections/_base.svelte";
    import Carousel from "$lib/ui/carousel/carousel.svelte";
    import Slide    from "$lib/ui/carousel/slide_testimony.svelte";
</script>

<Section id="section_testimony" pretitle={'Ce que mes clients disent sur moi'} title={'Témoignages'}>
    <Carousel id="testimony_carousel">
        <Slide 
            img = "/img/persons/vj.jpg"
            name = "Vj Odedra"
            company = "VYZYO"
            job = {$t('c.ceo')}
            link = "https://www.linkedin.com/in/vjodedra/"
            mission = {$t('c.website_redesign')}
            date = "VYZYOPay - {$t('month.january')} 2023"
            comment = "Congratulations to our talented colleague for the brilliant redesign and development of our company's website. Thanks to your expertise, our site now truly reflects our company and has become a remarkable showcase for our products. your work is a major asset to our success. Well done! "
        />
        <Slide 
            img = "/img/persons/guillaume.jpeg"
            name = "Guillaume Robert"
            company = "Black Meridian"
            job = {$t('c.associate')}
            link = "https://www.linkedin.com/in/guillaume-robert-315138127/"
            mission = {$t('c.web_integration')}
            date = "Black Meridian - {$t('month.september')} 2021"
            comment = "Merci pour ton très bon travail. Ta précision est admirable, tu as enrichis considérablement notre site, offrant une expérience utilisateur au top. Merci pour ton engagement."
        />
        <Slide 
            img = "/img/persons/christian.jpeg"
            name = "Christian Bergeret"
            company = "Trafic Factory"
            job = {$t('c.founder_marketing_digital_expert')}
            link = "https://www.linkedin.com/in/christian-bergeret-24860417/"
            mission = {$t('c.data_viz_tracking')}
            date = "Trafic factory - {$t('month.april')} 2020"
            comment = "Travail précis et méticuleux qui contribue grandement à notre succès en optimisant les performances de nos clients sur le web. Bravo pour ta contribution exceptionnelle !"
        />
        <Slide 
            img = "/img/persons/guigui.png"
            name = "Guilhem Schiltz"
            company = "Optimize matter"
            job = {$t('c.data_consultant')}
            link = "https://www.linkedin.com/in/guilhem-schiltz/"
            mission = {$t('c.lead_fb_ads')}
            date = "Le 71 - {$t('month.may')} 2021"
            comment = "Travailler avec Jimmy a été une expérience enrichissante professionnellement et personnellement. Jimmy est fondamentalement pragmatique et efficace, ce qui est rafraîchissant lors de la mise en œuvre d'un projet data."
        />  
        <Slide 
            img = "/img/icons/cross.svg"
            name = "Steve Terell"
            company = "Burden bearers"
            job = {$t('c.entrepreneur')}
            link = ""
            mission = {$t('c.data_tracking_set_up')}
            date = "Burden bearers - {$t('month.july')} 2021"
            comment = "Again, a special freelancer who has a total grasp of the necessary digital marketing tools and loop. Not just a specialized knowledge of only one component or part of the online marketing needs, but with an understanding of all working parts and how to make them build your website traffic and presence."
        />
        <Slide 
            img = "/img/persons/gregoire.jpg"
            name = "Grégoire Charrassin"
            company = "Design Fiction Studio"
            job = {$t('c.greg_job')}
            link = "https://www.linkedin.com/in/gcharrassin/"
            mission = {$t('c.interface_design')}
            date = "Hetic - {$t('month.january')} 2021"
            comment = "Je garde d'excellents souvenirs de Jimmy, que j'ai rencontré lorsqu'il était étudiant. Lors de mes interventions, il savait faire preuve d'une grande ténacité, d'une vraie curiosité et d'un dévouement sans faille pour ses études, qui le passionnaient."
        />
    </Carousel>
</Section>

<style  lang="scss">

</style>