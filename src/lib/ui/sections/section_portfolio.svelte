<script>
    import { t } from '$lib/languages/translations';
    //
    import Section from '$lib/ui/sections/_base.svelte';
    import Project from '$lib/ui/cards/project.svelte';
    import Modal   from "$lib/ui/modals/modal_project.svelte";  
    //
    export let projects = [{'id':'vyzyopay_web2','name':'Refonte des administrations web pour un core banking','cat':'Refonte','img':'img/portfolio/vyzyo_pay.jpg','url':'https://web.vyzyopay.com/web2/','description':'Développement d\'un site vitrine pour YUNUSPay, wallet mobile pour le Cameroun en partenariat avec la Campost. Tous les services Campost-YunusPay sont accessibles depuis l\'application mobile. Les agences CAMPOST vous permettent de déposer et de retirer de l\'argent en espèce. Votre téléphone portable vous permet d\'avoir vos services financiers directement dans votre poche. Pilotez votre compte et vos activités depuis l\'application Campost-YunusPay. Grâce à ce wallet mobile nous permettons aux camerounais d\'utiliser un système moderne et sécurisé pour gérer leur argent.<br><br>Défis rencontrés: Gestion du multilangue.<br><br>Technologies utilisées: Wordpress, DIVI, PHP, JS, HTML, CSS.'},{'id':'vyzyopay_website','name':'Développement du site vitrine du groupe VYZYO','cat':'Développement web','img':'img/portfolio/vyzyo_web.jpg','url':'https://www.vyzyo.com/','description':'Développement d\'un site corporate présentant les différents champs d\'activité du groupe VYZYO. VYZYO est un groupe spécialisé dans les fintech, les telecoms et les VAS (value added services). Le groupe est présent dans de nombreux pays, notamment des pays en voie de développement et les partenaires qui permettent le développement des nombreux projets du groupe sont variés et prestigieux.<br><br>Défis rencontrés: Gestion du multilangue, synthétiser & architecturer l\'information, correspondre à la vision du CEO.<br><br>Technologies utilisées: Wordpress, DIVI, PHP, JS, HTML, CSS.',},{'id':'takpay_website','name':'Développement du site vitrine de TAKPay','cat':'Développement web','img':'img/portfolio/tak.jpg','url':'https://www.takpay.tn/','description':'Développement d\'un site vitrine pour TAKPay, wallet mobile pour la Tunisie en partenariat avec Al Baraka Bank. TAK propose des services financiers pour vous accompagner en fonction de vos besoins. Transférez ou recevez de l\'argent de manière instantanée. Payez vos commerçants tout aussi rapidement.<br><br>Défis rencontrés: RAS.<br><br>Technologies utilisées: Wordpress, DIVI, PHP, JS, HTML, CSS.',},{'id':'yunuspay_website','name':'Développement du site vitrine de YUNUSPay','cat':'Développement web','img':'img/portfolio/yunus.jpg','url':'https://www.yunuspay.com/','description':'Développement d\'un site vitrine pour YUNUSPay, wallet mobile pour le Cameroun en partenariat avec la Campost. Tous les services Campost-YunusPay sont accessibles depuis l\'application mobile. Les agences CAMPOST vous permettent de déposer et de retirer de l\'argent en espèce. Votre téléphone portable vous permet d\'avoir vos services financiers directement dans votre poche. Pilotez votre compte et vos activités depuis l\'application Campost-YunusPay. Grâce à ce wallet mobile nous permettons aux camerounais d\'utiliser un système moderne et sécurisé pour gérer leur argent.<br><br>Défis rencontrés: Gestion du multilangue.<br><br>Technologies utilisées: Wordpress, DIVI, PHP, JS, HTML, CSS.',},];
</script>

<Section id="section_portfolio" pretitle={$t('c.pf_pretitle')} title={$t('c.pf_title')}>
    <div class="cards_wrapper">
        {#each projects as p}
        <Project 
            img={p.img} 
            title={$t(p.name)} 
            pretitle={$t(p.cat)}
            modal_id={p.id}
        />
        <Modal 
            id={p.id}
            title={$t(p.name)}
            cat={$t(p.cat)}
            img={p.img}
            content={$t(p.description)}
            link={p.url}
        />
        {/each}
    </div>
</Section>

<style lang="scss">
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