<script>
    import { page }        from '$app/stores';
    var pathName = $page.url.pathname;
    var xx = $page.params.lang ?? '';
    var langParam = '/'+xx;
    //console.log(pathName);
    var xxx = pathName.split('/');
    //xxx.shift();
    //console.log(xxx);
    //console.log(langParam);
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';
    import {hasClass, addClass, removeClass} from '$lib/helpers/dom_helper.js';
    //
    import Svg         from '$lib/ui/basics/svg.svelte';
    import Hidden_link from '$lib/ui/basics/hidden_link.svelte';
    //
    export let lang = 'fr';
    export let lang_data = [
        {
            "id"    : "fr",
            "label" : "Français",
            "path"  : "" /*Default*/,
            "flag"  : "/img/flags/fr.png"
        },
        {
            "id"    : "en",
            "label" : "English",
            "path"  : "en/",
            "flag"  : "/img/flags/us.png"
        },
        {
            "id"    : "es",
            "label" : "Español",
            "path"  : "es/",
            "flag"  : "/img/flags/mx.png"
        },
        {
            "id"    : "ja",
            "label" : "日本語",
            "path"  : "ja/",
            "flag"  : "/img/flags/ja.png"
        },
    ];
    lang_data.forEach(e => {
        if(['en', 'es', 'ja', ''].includes(xxx[1])){
            var newUrlArray = ['/'];
            newUrlArray.push(`${e.path}`);
            // Don't add second element
            xxx.forEach((el, i) => {
                if(i > 1){
                    newUrlArray.push(el+'/');
                }
            })
            var newUrl = newUrlArray.join('');
            if(newUrl.substr(newUrl.length - 1) === '/' && newUrl.length > 1){
                newUrl = newUrl.slice(0, -1);
            }
            e.url = newUrl;
            //console.log(e.url);
        }else{
            var newUrlArray = ['/'];
            newUrlArray.push(`${e.path}`);
            // Add second element
            xxx.forEach((el, i) => {
                if(i > 0){
                    newUrlArray.push(el+'/');
                }
            })
            var newUrl = newUrlArray.join('');
            if(newUrl.substr(newUrl.length - 1) === '/' && newUrl.length > 1){
                newUrl = newUrl.slice(0, -1);
            }
            e.url = newUrl;
            //console.log(e.url);
        }
    });
    //
    var selectedLang = lang_data.find((e) => e.id === lang);
    var selectedFlag = selectedLang.flag;
    //
    onMount(() => {
        if(browser){
            var elLanguagePickerList = document.querySelectorAll('.language_picker');
            var elLanguagesContList  = document.querySelectorAll('.languages_wrapper');
            //
            elLanguagePickerList.forEach(elLanguagePicker => {
                elLanguagePicker.addEventListener('mouseenter', e => {
                    removeClass(e.currentTarget.querySelector('.languages_wrapper'), 'hidden');
                })
            })
            elLanguagesContList.forEach((el, i) => {
                el.addEventListener('animationend', function(event){
                    var element       = event.target;
                    var animationName = event.animationName;
                    //
                    if(animationName.match(/fadeOut/)){
                        addClass(el, 'hidden');
                    }
                })    
            });
        }
    })
</script>

<div class="language_picker">
    <div class="selected_language">
        <img class="flag" src="{selectedLang.flag}" alt="">
        <Svg icon="/img/icons/chevron.svg" />
    </div>
    <div class="languages_wrapper hidden">
        <div class="languages_cont">
            {#each lang_data as item}
            <div class="language_option">
                <img src="{item.flag}" alt="" class="flag">
                <span>{item.label}</span>
                <Hidden_link url={item.url}/>
            </div>
            {/each}
        </div>
    </div>
</div>

<style lang="scss">
.language_picker{
    z-index: 1;
    position: relative;
    margin: auto 0 auto 20px;
    width: fit-content;
    .selected_language{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 6px 8px;
        box-shadow: var(--boxshadow1);
        border-radius: 4px;
        cursor: pointer;
        :global(svg){
            height: 8px;
            width: 8px;
            fill: var(--font_color);
        }
        &:hover{
            & + .languages_wrapper{
                animation-name: fadeIn;
            }
        }
    }
    .flag{
        width: 16px;
        height: 16px;
    }
    .languages_wrapper{
        //display: none;
        position: absolute;
        transition: 250ms;
        animation-duration: 400ms;
        animation-name: fadeOut;
        .languages_cont{
            display: flex;
            flex-direction: column;
            background-color: var(--bg_color);
            border-radius: 6px;
            box-shadow: var(--boxshadow1);
            min-width: 160px;
            width: max-content;
            padding: 8px;
            gap: 4px;
            margin-top: 4px;
        }
        .language_option{
            display: flex;
            position: relative;
            gap: 8px;
            align-items: center;
            padding: 6px;
            cursor: pointer;
            transition: var(--transition1);
            border-radius: 6px;
            span{
                transition: var(--transition1);
                font-weight: 500;
                font-size: 14px;
                color: var(--font_color);
            }
            &:hover{
                background-color: var(--hover_nav_item_bg);
                span{
                    color: var(--hilight1);
                }
            }
        }
        &:hover{
            animation-name: fadeIn;
        }
    }
}

:global(footer){
    .language_picker{
        margin: 0 0 20px 0!important;
    }
}

:global([mobile_menu]){
    .language_picker{
        margin: 20px 0 0 20px !important;
        .languages_cont{
            background-color: var(--mobile_menu_bg)!important;
        }
    }
}

:global(body[is_top_of_page=false]){
    .languages_cont{
        background-color: var(--mobile_menu_bg)!important;
    }
}

@media (max-width: 1200px) {
    :global(header){
        .language_picker{
            .languages_wrapper{
                right: 0;
            }
        }
    }
}
</style>