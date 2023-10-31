<script>
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';
    import { setTheme } from "$lib/helpers/theme_helper.js"
    import {setCookie} from "$lib/helpers/cookies_helper.js"
    //
    import Svg  from '$lib/ui/basics/svg.svelte';
    //
    onMount(() => {
        if(browser){
            var elBody = document.querySelector('body');
            var elListToggleTheme = document.querySelectorAll('[toggle_theme]');
            //
            elListToggleTheme.forEach(el => {
                el.addEventListener('click', (e) => {
                    if(e.currentTarget.querySelector('input').checked === false){
                        setTheme('default', elBody, elListToggleTheme);
                        setCookie('prefered_theme', encodeURIComponent('default'), 1000);
                    }
                    else{
                        setTheme('dark', elBody, elListToggleTheme);
                        setCookie('prefered_theme', encodeURIComponent('dark'), 1000);
                    }
                })
            })
        }
    })
</script>

<label toggle_theme class="switch">
    <input type="checkbox"  aria-label="Toggle theme">
    <div class="slider round">
        <div class="circle">
            <Svg icon="/img/icons/sun.svg" />
        </div>
    </div>
</label>

<style lang="scss">
.switch {
    position: relative;
    display: inline-block;
    width: 48px;
    height: 26px;
    margin-bottom: 20px;
    input { 
        opacity: 0;
        width: 0;
        height: 0;
        &:checked + .slider .circle {
            -webkit-transform: translateX(22px);
            -ms-transform: translateX(22px);
            transform: translateX(22px);
        }
    }
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--bg_color);
        box-shadow: var(--boxshadow1);
        transition: var(--transition1);
        border-radius: 34px;
        .circle {
            position: absolute;
            content: "";
            height: 18px;
            width: 18px;
            left: 4px;
            bottom: 4px;
            background-color: var(--mobile_menu_bg);
            box-shadow: var(--boxshadow1);
            transition: var(--transition1);
            border-radius: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            :global(svg){
                height: 12px;
                width: 12px;
                fill: var(--font_color);
            }
        }
    }
}

:global([mobile_menu] [toggle_theme]){
    margin: 20px 18px;
}
    
</style>