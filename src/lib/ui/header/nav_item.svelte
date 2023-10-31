<script>
    import { t } from '$lib/languages/translations';
    //
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';
    import {hasClass, addClass, removeClass} from '$lib/helpers/dom_helper.js';
    //
    import Svg         from '$lib/ui/basics/svg.svelte';
    import Hidden_link from '$lib/ui/basics/hidden_link.svelte';
    //
    export let item =     {
        "url"     : "/#section_portfolio",
        "label"   : "Portfolio",
        "children": [
            {
                "url"  : "/#section_portfolio",
                "label": "Développement web",
            },
            {
                "url"  : "/#section_portfolio",
                "label": "Marketing digital",
            },
        ]
    };
    // This allow navigation in section inside the homepage without reloading (ex: https://www.jm.com/en#my_section)
    var lang = $t('c.lang_path');
    var lang_path = `${lang}/`;
    if(lang === ''){
        lang_path = '';
    }
    //
    export let hide_submenu = true;
    var hidden_class;
    hide_submenu ? hidden_class = 'hidden' : hidden_class = '';
    //
    onMount(() => {
        if(browser){
            // On mouse enter, remove display none and play FadeIn animation
            // On FadeIn animation end, add display none
            document.querySelectorAll('nav[desktop_menu] .button').forEach((el, i) => {
                el.addEventListener('mouseenter', function(event){
                    if(event.target.querySelector('.submenu_cont'))
                    removeClass(event.target.querySelector('.submenu_cont'), 'hidden');
                })    
            });
            document.querySelectorAll('nav[desktop_menu] .submenu_cont').forEach((el, i) => {
                el.addEventListener('animationend', function(event){
                    var element       = event.target;
                    var animationName = event.animationName;
                    //
                    if(animationName.match(/fadeOut/)){
                        addClass(element, 'hidden');
                    }
                })    
            });
        }
	});
</script>

<div class="button_cont">
    <div id="{item.id}" class="button {item.css_classes}">
        <div class="link_cont">
            {#if item.is_internal === false}
            <a href="{item.url}" target="_blank">{$t(item.label)}</a>

            {:else if item.is_home_section === true}
            <a href="/{lang}{item.url}">{$t(item.label)}</a>

            {:else}
            <a href="/{lang_path}{item.url}">{$t(item.label)}</a>

            {/if}
            {#if typeof item.children === 'object'}
            <div class="chevron">
                <Svg icon="/img/icons/chevron.svg" />
            </div>
            {/if}
        </div>
        {#if typeof item.children === 'object'}
        <div class="submenu_cont {hidden_class}">
            <div class="submenu">
            {#each item.children as item_lvl2}
                <div class="button">
                    <div class="link_cont">
                        <span>{$t(item_lvl2.label)}</span>
                        {#if item_lvl2.is_home_section === true}
                        <Hidden_link url="/{lang}{item.url}" label="{$t(item_lvl2.label)}" />
            
                        {:else}
                        <Hidden_link url="/{lang_path}{item.url}" label="{$t(item_lvl2.label)}" />
            
                        {/if}
                    </div>
                </div>
            {/each}
            </div>
        </div>
        {/if}
    </div>
</div>

<style lang="scss">
.button_cont{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .button{
        display: flex;
        align-items: center;
        background-color: transparent;
        border-radius: 6px;
        position: relative;
        padding: 6px 12px;
        transition: var(--transition1);
        //
        &.cta{
            padding: 0;
            box-shadow: var(--boxshadow1);
            background: var(--purple2);
            a{
                padding: 6px 12px;
                color: var(--white1);
                line-height: 1;
            }
        }
        &.cta:hover{
            transform: translateY(-4px);
            a{
                color: var(--white1)!important;
            }
        }
        &:hover{
            & > .link_cont > a, & > .link_cont > span{
                color: var(--hilight1);
            }
            :global(.chevron svg){
                fill: var(--hilight1);
            }
            //
            .submenu_cont{
                animation-name: fadeIn;
                display: flex;
            }
        }
        .link_cont{
            display: flex!important;
            align-items: center!important;
        }
        //
        a, span{
            padding: 0;
            transition: var(--transition1);
            font-weight: 500;
            font-size: 14px;
            color: var(--font_color);
        }
        //
        .chevron{
            display: flex;
        }
        :global(.chevron svg){
            height: 8px;
            width: 8px;
            fill: var(--font_color);
            transform: translateY(2px);
            margin-left: 6px;
            cursor: pointer;
        }
        //
        .submenu_cont{
            position: absolute;
            left: 0;
            z-index: 11;
            transform: translateY(calc(50% + 8px));
            padding-top: 6px;
            animation-duration: 400ms;
            animation-name: fadeOut;
            //
            .submenu{
                flex-direction: column;
                background-color: var(--bg_color);
                border-radius: 6px;
                box-shadow: var(--boxshadow1);
                min-width: 160px;
                width: max-content;
                padding: 8px;
                gap: 4px;
                transition: 250ms;
                //
                .button{
                    width: 100%;
                    border-radius: 6px;
                    display: flex;
                    align-items: center;
                    padding: 6px;
                    transition: 500ms;
                    //
                    a{
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                    }
                    //
                    span{
                        padding: unset;
                    }
                    //
                    &:hover{
                        background-color: var(--hover_nav_item_bg);
                    }
                }
            }
        }
    }
}

:global(.mobile_menu_cont){
.button{
    flex-direction: column!important;
    align-items: flex-start!important; 
    padding: 6px 18px;
    //
    .submenu_cont{
        transform: unset!important;
        display: flex;
        animation-name: unset!important;
        position: relative;
        .submenu{
            background-color: var(--mobile_menu_bg);
        }
    }
}}

:global(.mobile_menu_cont .cta){
    max-width: 80%;
    width: fit-content;
    margin-left: 18px;
    padding: 4px 12px;
}

:global(body[is_top_of_page=false] nav[desktop_menu] .submenu){
    background-color: var(--mobile_menu_bg)!important;
    .button{
        padding: 4px 12px!important;
    }
}
    

@media (max-width: 992px) {
    .button_cont{
            display: contents;
        .button{
            padding: 6px 18px;
            flex-direction: column;
            align-items: start;
            .submenu_cont{
                transform: unset !important;
                display: flex;
                animation-name: unset !important;
                position: relative;
                .submenu{
                    align-items: start;
                    .button{
                        align-items: flex-start;
                    }
                }
            }
        }
    }
}
</style>