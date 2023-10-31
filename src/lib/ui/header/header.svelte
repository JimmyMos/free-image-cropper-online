<script>
    /**
    * 'css_classes': 'cta' for a call to action.
    * add bottom_logo class to .navbar to have a logo aligned on the nav bottom
    */
    import { t } from '$lib/languages/translations';
    import { PUBLIC_BASE_URL } from '$env/static/public';
    import Image from '@urami/svelte';
    //
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';
    import {hasClass, addClass, removeClass} from '$lib/helpers/dom_helper.js';
    //
    import Toggle_theme from '$lib/ui/utils/toggle_theme.svelte';
    import Svg         from '$lib/ui/basics/svg.svelte';
    import Hidden_link from '$lib/ui/basics/hidden_link.svelte';
    import Nav_item    from '$lib/ui/header/nav_item.svelte';
    import Language_picker from "$lib/ui/utils/language_picker.svelte";
    //
    export let nav_items           = [{url:"",label:"Accueil"},{url:"",label:"Item 1"},{url:"",label:"Item 2",children:[{url:"",label:"Item 2 - A"},{url:"",label:"Item 2 - B"}]},{url:"",label:"Item 3"},{url:"",label:"CTA",css_classes:"cta"}];
    export let logo                = '';
    export let logo_alt            = 'Home';
    export let logo_vertical_align = 'center';
    //
    var langPath = $t('c.lang_path');
    //
    onMount(() => {
        if(browser){
            var elBody               = document.querySelector('body');
            var elMobileBurgerButton = document.querySelector('.nav_burger_button');
            var elMobileNavWrapper   = document.querySelector('.mobile_menu_cont');
            //
            elBody.setAttribute('is_mobile_nav_displayed', 'false');
            //
            function openMobileNav(elMobileNav){
                var evOpenMobileNav = new CustomEvent('stateChanged', {
                    'detail' : {
                        'name'    : 'isMobileNavDisplayed',
                        'state'   : true,
                    }
                });
                document.dispatchEvent(evOpenMobileNav);
                //
                elBody.setAttribute('is_mobile_nav_displayed', 'true');
                removeClass(elMobileNav, 'hidden');
                removeClass(elMobileNav, 'animate_out');
            }
            function closeMobileNav(elMobileNav){
                var evOpenMobileNav = new CustomEvent('stateChanged', {
                    'detail' : {
                        'name'    : 'evOpenMobileNav',
                        'state'   : false,
                    }
                });
                document.dispatchEvent(evOpenMobileNav);
                //
                elBody.setAttribute('is_mobile_nav_displayed', 'false');
                addClass(elMobileNav, 'animate_out');
                elMobileNav.addEventListener('animationend', function(e){
                    var animationName = e.animationName;
                    if(animationName === 'fadeOut2'){
                        addClass(elMobileNav, 'hidden');
                        removeClass(elMobileNav, 'animate_out');
                    }
                })
            }
            //
            // Open or close mobile nav depending the state while clicking on burger menu
            elMobileBurgerButton.addEventListener('click', function(){
                if(elBody.getAttribute('is_mobile_nav_displayed') === 'false'){
                    openMobileNav(elMobileNavWrapper);
                }
                else{
                    closeMobileNav(elMobileNavWrapper);
                }
            });
            // Close the mobile nav when on desktop view
            window.addEventListener('resize', function(){
                if(window.matchMedia('(min-width: 993px)').matches){
                    closeMobileNav(elMobileNavWrapper);
                }
            });
            // Close mobile nav when clicking on its background
            elMobileNavWrapper.addEventListener('click', function(e){
                // This trick block the click event to trigger on children
                if (e.target !== this)
                return;
                closeMobileNav(elMobileNavWrapper);
            });
            // Close mobile nav when clicking on one of its link
            document.querySelectorAll('.mobile_menu_cont a').forEach((el) =>{
                el.addEventListener('click', function(e){
                    closeMobileNav(elMobileNavWrapper);
                });
            })
        }
	});
</script>

<header logo_vertical_align="{logo_vertical_align}">
    <div class="navbar bottom_logo">
        <div class="logo_container">
            <Image
                src="{PUBLIC_BASE_URL}{logo}"
                width=60
                alt="{logo_alt}"
            />
            <Hidden_link url="/{langPath}" label="Home" />
        </div>
        <nav desktop_menu>
            {#each nav_items as item}
            <Nav_item item={item}/>
            {/each}
            <slot name="languagePicker" />
        </nav>
        <div class="nav_burger_button">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</header>
<div class="mobile_menu_cont hidden">
    <nav mobile_menu>
        {#each nav_items as item}
        <Nav_item hide_submenu={false} item={item}/>
        {/each}
        <slot name="languagePicker" />
        <Toggle_theme />
    </nav>
</div>


<style lang="scss">
nav /*Both mobile and desktop*/{
    display: flex;
    gap: 4px;
    height: 100%;
}

header{
    z-index: 10;
    height: 60px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    gap: 20px;
    padding: 0 8vw;
    position: fixed;
    top: 0;
    box-shadow: var(--boxshadow1);
    transition: var(--transition1);
    background-color: var(--bg_color);
    margin-top: 30px;
    //
    .navbar{
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
        height: 100%;
        //
        .nav_burger_button{
            display: none;
            height: 20px;
            width: 20px;
            justify-content: space-between;
            flex-direction: column;
            cursor: pointer;
            //
            &:hover div{
                background-color: var(--purple3);
                box-shadow: var(--boxshadow1);
            }
            //
            div{
                background-color: var(--font_color);
                width: 100%;
                height: 2px;
                border-radius: 6px;
                transition: var(--transition1);
            }
        }
        //
        .logo_container{
            height: 60px /*Header height*/;
            position: relative;
            padding: 14px 0;
            transition: var(--transition1);
            //
            :global(img){
                max-width: 100%;
                max-height: 100%;
                object-fit: contain
            }
        } 
        //
        nav[desktop_menu]{
            //
        }
    } 
}

.mobile_menu_cont{
    display: flex;
    position: fixed;
    z-index: 9;
    top: 0;
    right: 0;
    background-color: var(--hide_bg);
    height: 100%;
    transform: translateY(40px);
    justify-content: flex-end;
    width: 100%;
    animation-duration: 200ms;
    animation-name: fadeIn;
    //
    nav[mobile_menu]{
        display: flex !important;
        flex-direction: column;
        background-color: var(--mobile_menu_bg);
        box-shadow: var(--boxshadow1);
        animation-duration: 400ms;
        animation-name: inFromRight;
        padding: 8px 0;
        //
    }
}

:global(html body header[logo_vertical_align=bottom]){
    .logo_container{
        padding: 0!important;
    }
}

:global([is_mobile_nav_displayed=true]){
    header{
        //
        .nav_burger_button > div:nth-of-type(1){
            transform: translateY(9px) rotate(45deg);
        }
        .nav_burger_button > div:nth-of-type(2){
            opacity: 0;
        }
        .nav_burger_button > div:nth-of-type(3){
            transform: translateY(-9px) rotate(135deg);
        }
    }
}

:global([is_top_of_page=false]){
    header{
        background-color: var(--mobile_menu_bg);
        height: 40px;
        //
        .logo_container{
            height: 40px!important;
            padding: 8px 0!important;
        }
        //
        nav[desktop_menu]{
            //
        }
    }
}

:global(.mobile_menu_cont.animate_out){
    animation-name: fadeOut2!important;
    animation-duration: 400ms!important;
    nav[mobile_menu]{
        animation-name: outToRight!important;
        animation-duration: 400ms!important;
    }
}

/**********************************************/
/*Media queries********************************/
/**********************************************/
@media (max-width: 992px) {
    header{
        background-color: var(--mobile_menu_bg);
        height: 40px;
        padding: 0 var(--mobile_gutter);
        //
        .navbar{
            //
            .logo_container{
                height: 40px!important;
                padding: 8px 0!important;
            }
            //
            .nav_burger_button{
                display: flex;
            }
            //
            [desktop_menu]{
                display: none;
            }
        }
    }
}
</style>