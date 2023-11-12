<script>
    import { t } from '$lib/languages/translations';
    //
    import Signature    from '$lib/ui/footer/signature.svelte';
    import Toggle_theme from '$lib/ui/utils/toggle_theme.svelte';
    import Contact_bloc from "$lib/ui/utils/contact_bloc.svelte";
    //
    export let footer_data  = [{"title":"Plan de site","items":[{"label":"Accueil","url":"/","target":"_self",},{"label":"Skills","url":"/#section_skills","target":"_self",},{"label":"Portfolio","url":"/#section_portfolio","target":"_self",},{"label":"Clients","url":"/#section_clients","target":"_self",},{"label":"Contact","url":"https://wa.me/+33666469136","target":"_blank",},]},{"title":"Liens utiles","items":[{"label":"Politique de confidentialité","url":"","target":"_self",},{"label":"Mentions légales","url":"","target":"_self",},]}];
    export let logo         = '';
    export let logo_alt     = '';
    export let description  = '';
    export let copyright    = '';
    //
    // This allow navigation in section inside the homepage without reloading (ex: https://www.jm.com/en#my_section)
    var lang = $t('c.lang_path');
    var lang_path = `${lang}/`;
    if(lang === ''){
        lang_path = '';
    }
</script>

<footer>
    <Signature />
</footer>

<style lang="scss">
footer{
    background-color: var(--mobile_menu_bg);
    box-shadow: var(--boxshadow1);
    padding: 20px var(--gutter);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    transition: var(--transition1);
    .wrapper{
        display: flex;
        gap: 60px;
        width: 100%;
        margin-bottom: 10px;
        .container{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
            max-width: 25%;
        }
        .logo_container{
            img{
                height: 48px;
                aspect-ratio: 1/1;
                width: fit-content;
                object-fit: contain;
            }
            .description{
                font-size: 15px;
                line-height: 22px;
                font-weight: 400;
                letter-spacing: 1px;
            }
        }
        .link_container{
            .title{
                margin-bottom: 6px;
                font-size: 18px;
                line-height: 22px;
                font-weight: 500;
                letter-spacing: 1px;
            }
        }
    }
    span.rights{
        color: var(--hidden_text_color);
        font-size: 12px;
    }
}

@media (max-width: 1400px) {
    footer {
        padding: 20px 8vw;
    }
}

@media (max-width: 1200px) {
    footer {
        padding: 20px 8vw;
        .wrapper{
            flex-direction: column;
            gap: 20px;
            .container{
                max-width: 50%;
            }
            .link_container{
                .title{
                    margin-bottom: 0;
                }
            }
        }
    }
}

@media (max-width: 992px) {
    footer{
        padding: 20px 12px;
    }
}

@media (max-width: 700px) {
    footer {
        .wrapper{
            .container{
                max-width: unset;
            }
        }
        span.signature{
            margin: 10px 0 ;
        }
    }
}
</style>