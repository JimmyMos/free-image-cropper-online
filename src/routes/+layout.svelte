<script>
export var data;
console.log('Data------------------------------');
console.log(data)
//
import { t, translations } from '$lib/languages/translations';
//console.log('Traductions-----------------------');
//console.log(translations.get());
//
import projects    from "$lib/data/projects.js";
import clients     from "$lib/data/clients.js";
import nav_data    from '$lib/data/nav_data.js';
import footer_data from "$lib/data/footer_data.js"
import tools       from "$lib/data/tools.js";
//
import { onMount }     from 'svelte';
import { browser }     from '$app/environment';
//
import { IsTopOfPage } from '$lib/helpers/dom_scroll_helper'
import { findParent, hasClass, addClass, removeClass }  from '$lib/helpers/dom_helper'
//
import Top_banner from "$lib/ui/header/top_banner.svelte";
import Header from "$lib/ui/header/header.svelte";
import Hero   from "$lib/ui/sections/section_hero.svelte";
import Section_skills   from "$lib/ui/sections/section_skills.svelte";
import Skill   from '$lib/ui/cards/skill.svelte';
import Section_portfolio  from "$lib/ui/sections/section_portfolio.svelte";
import Section_cv         from "$lib/ui/sections/section_cv.svelte";
import Section_tools      from "$lib/ui/sections/section_tools.svelte";
import Section_clients    from "$lib/ui/sections/section_clients.svelte";
import Language_picker from "$lib/ui/utils/language_picker.svelte";
import Footer from "$lib/ui/footer/footer.svelte";
import Go_to_top_button from '$lib/ui/utils/go_to_top.svelte';
import { setTheme } from "$lib/helpers/theme_helper.js"
import { getTodayData, setUserDateCookie } from "$lib/helpers/date_helper.js"
import { getThemeFromDate } from "$lib/helpers/theme_helper.js"
import {setCookie, getCookie} from "$lib/helpers/cookies_helper.js"
//
var fonts = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap';
//
onMount(() => {
    if(browser){
        var elBody = document.querySelector('body');
        //
        elBody.setAttribute('is_top_of_page', IsTopOfPage());
        document.addEventListener('scroll', function(){
            elBody.setAttribute('is_top_of_page', IsTopOfPage());
        });
        //
        setTheme(data.theme, elBody, document.querySelectorAll('[toggle_theme]'));
        //
        if(typeof data.cookie_user_date === 'undefined' && typeof data.cookie_prefered_theme === 'undefined'){
            setTheme(getThemeFromDate(), elBody, document.querySelectorAll('[toggle_theme]'));
        }
        // Get user dateTime on landing and when leaving the page
        setUserDateCookie();
        window.onbeforeunload = function(){
            setUserDateCookie();
        };
    }
});
</script>
 
<svelte:head>
    <link rel="stylesheet" href="/css/variables.css?11231">
    <link rel="stylesheet" href="/css/reset.css?11231">
    <link rel="stylesheet" href="/css/styles.css?11231">

    <title>Jimmy Mostovoi || {$t('c.job')}</title>
    <meta name="description" t="seo_description" content="{$t('c.seo_description')}">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link async href="{fonts}" rel="stylesheet">

    <link rel="shortcut icon" type="image/x-icon" href="/img/logos/logo_jm.png" />
</svelte:head>




<Top_banner />
<Header 
    nav_items={nav_data}
    logo="/img/logos/logo_jm.png" 
    logo_vertical_align="bottom"
>
<Language_picker lang={data.lang} slot="languagePicker" />
</Header>
<slot />
<Footer 
    footer_data={footer_data}
    logo="/img/logos/logo_jm.png"
    description={$t('c.short_description')}
    copyright="2023. All rights reserved, by Jimmy Mostovoi."
>
<Language_picker lang={data.lang} slot="languagePicker" />
</Footer>
<Go_to_top_button />