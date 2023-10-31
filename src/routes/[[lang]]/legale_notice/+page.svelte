<script>
    import { t } from '$lib/languages/translations';
    import Doc_page from "$lib/ui/doc_page/doc_page.svelte"
</script>

<svelte:head>
    <title>{$t('c.legale_notice')}</title>
    <meta name="description" t="seo_description" content="{$t('c.seo_description')}">
</svelte:head>

<Doc_page>
    {@html $t('legale_notice.content', {
        "domain" : "www.jimmymostovoi.com",
        "owner"  : "Jimmy Mostovoi",
        "status" : $t('c.auto_entrepreneur'),
        "siren"  : "829 090 471",
        "address": "25 rue de la paix, 94300, VINCENNES",
        "mail"   : "contact@jimmymostovoi.com"
        })
    }
</Doc_page>