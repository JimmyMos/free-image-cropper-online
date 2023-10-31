<script>
    import { t } from '$lib/languages/translations';
    import Doc_page from "$lib/ui/doc_page/doc_page.svelte"
</script>

<svelte:head>
    <title>{$t('c.privacy_policy')}</title>
    <meta name="description" t="seo_description" content="{$t('c.seo_description')}">
</svelte:head>

<Doc_page>
    {@html $t('privacy_policy.content', {
        "domain" : "www.jimmymostovoi.com",
        "owner"  : "Jimmy Mostovoi",
        "mail"   : "contact@jimmymostovoi.com"
        })}
</Doc_page>