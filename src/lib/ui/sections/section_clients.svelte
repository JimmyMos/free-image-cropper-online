<script>
    import { t } from '$lib/languages/translations';
    //
    import Section from '$lib/ui/sections/_base.svelte';
    import Client  from '$lib/ui/cards/client.svelte';
    //
    export let client_data = [{'name':'YUNUSPay','img':'img/logos/yunus.png','url':'https://www.yunuspay.com/',},{'name':'TAK','img':'img/logos/tak.png','url':'https://www.takpay.tn/',},{'name':'IAF','img':'img/logos/iaf.png','url':'https://www.iafastro.org/',},{'name':'VYZYO','img':'img/logos/vyzyo.png','url':'https://www.vyzyo.com/',},{'name':'SIGMA Up','img':'img/logos/sigma_up.svg','url':'https://sigmaup.com/',},{'name':'Black Meridian','img':'img/logos/black-meridian.png','url':'https://www.black-meridian.com/',},{'name':'Teams connect','img':'img/logos/teams_connect.png','url':'https://www.teams-connect.com/',},{'name':'Trafic Factory','img':'img/logos/tf.png','url':'https://www.trafic-factory-referencement.fr/',},{'name':'Burden Bearers','img':'img/logos/burdenbearers.png','url':'https://www.burdenbearers.com/',},{'name':'Stores & Rideaux','img':'img/logos/sr.svg','url':'https://www.stores-et-rideaux.com/',},{'name':'Tende e Tende','img':'img/logos/tt.png','url':'https://www.tende-e-tende.it/',},{'name':'ProSolair','img':'img/logos/ps.png','url':'https://www.prosolair.com/',},{'name':'Woofer','img':'img/logos/woofer.svg','url':'https://www.woofer.io/',},{'name':'Addis Games','img':'img/logos/addisgames.svg','url':'https://www.addisgames.com/',},];
</script>

<Section id="section_clients" pretitle={$t('c.clients_pretitle')} title={$t('c.clients_title')}>
    <div class="clients_wrapper">
        {#each client_data as client}
        <Client 
            img="{client.img}" 
            name="{client.name}" 
            url="{client.url}"
        />
        {/each}
    </div>
</Section>

<style  lang="scss">
.clients_wrapper{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(auto-fill, auto);
    grid-row-gap: 38px;
    grid-column-gap: 38px;
}

@media (max-width: 1200px) {
    .clients_wrapper{
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 700px) {
    .clients_wrapper{
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 20px;
        grid-column-gap: 20px;
    }
}
</style>