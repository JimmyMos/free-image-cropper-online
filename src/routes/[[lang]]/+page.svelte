<script>
    export var data;
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
    import Header from "$lib/ui/header/header.svelte";
    import Hero   from "$lib/ui/sections/section_hero.svelte";
    import Section_skills   from "$lib/ui/sections/section_skills.svelte";
    import Skill   from '$lib/ui/cards/skill.svelte';
    import Section_portfolio  from "$lib/ui/sections/section_portfolio.svelte";
    import Section_cv         from "$lib/ui/sections/section_cv.svelte";
    import Section_tools      from "$lib/ui/sections/section_tools.svelte";
    import Section_clients    from "$lib/ui/sections/section_clients.svelte";
    import Section_testimony    from "$lib/ui/sections/section_testimony.svelte";
    import Footer from "$lib/ui/footer/footer.svelte";
    import Go_to_top_button from '$lib/ui/utils/go_to_top.svelte';
    import { setTheme } from "$lib/helpers/theme_helper.js"
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
            if(data.theme === 'dark'){
                setTheme('dark', elBody, document.querySelectorAll('[toggle_theme]'));
            }else{
                setTheme('default', elBody, document.querySelectorAll('[toggle_theme]'));
            }
	    }
    });
</script>

<main>
    <Hero />
    <Section_skills>
        <Skill icon="img/logos/slack.svg" title={$t('c.skills_1_title')} content={$t('c.skills_1_descr')} />
        <Skill icon="img/icons/layout.svg" title={$t('c.skills_2_title')} content={$t('c.skills_2_descr')} />
        <Skill icon="img/icons/chip.svg" title={$t('c.skills_3_title')} content={$t('c.skills_3_descr')} />
        <Skill icon="img/icons/search.svg" title={$t('c.skills_4_title')} content={$t('c.skills_4_descr')} />
        <Skill icon="img/logos/chrome.svg" title={$t('c.skills_5_title')} content={$t('c.skills_5_descr')} />
        <Skill icon="img/icons/user_check.svg" title={$t('c.skills_6_title')} content={$t('c.skills_6_descr')} />
    </Section_skills>
    <Section_portfolio projects={projects}/>
    <Section_tools data={tools} />
    <Section_clients client_data={clients}/>
    <Section_testimony />
    <Section_cv />
</main>
