<script>
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';
    //
    import { IsTopOfPage } from '$lib/helpers/dom_scroll_helper';
    import { findParent, hasClass, addClass, removeClass }  from '$lib/helpers/dom_helper';
    import Svg from '$lib/ui/basics/svg.svelte';
    //
    onMount(() => {
        if(browser){
            function showGoToTopButton(){
                removeClass(elGoToTopButton, 'animate_in');
                addClass(elGoToTopButton, 'animate_out');
                elGoToTopButton.addEventListener('animationend', function(event){
                    var animationName = event.animationName;
                    //
                    if(animationName === 'fadeOut'){
                        addClass(elGoToTopButton, 'hidden');
                        removeClass(elGoToTopButton, 'animate_out');
                    }
                })
            }
            function hideGoToTopButton(){
                removeClass(elGoToTopButton, 'hidden');
                addClass(elGoToTopButton, 'animate_in');
            }
            //
            var elGoToTopButton = document.querySelector('.got_to_top_button');
            //
            elGoToTopButton.addEventListener('click', () => {
                window.scroll({
                    top: 0, 
                    left: 0, 
                    behavior: 'smooth'
                });
            })
            //
            if(IsTopOfPage()){
                showGoToTopButton();
            }
            else{
                hideGoToTopButton();
            }
            window.addEventListener('scroll', () => {
                if(IsTopOfPage()){
                    showGoToTopButton();
                }
                else{
                    hideGoToTopButton();
                }
            })
        }
    })
</script>

<div class="got_to_top_button hidden">
    <div class="hover_bg"></div>
    <Svg icon="/img/icons/arrow.svg" />
</div>

<style lang="scss">
.got_to_top_button{
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    background-color: var(--mobile_menu_bg);
    border-radius: 100%;
    cursor: pointer;
    box-shadow: var(--boxshadow2);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;    
    :global(svg){
        z-index: 1;
        fill: var(--font_color);
    }
    .hover_bg{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: var(--gd_blue_purple1);
        opacity: 0;
        transition: var(--transition1);
    }
    &:hover{
        :global(svg){
            fill: var(--white1);
            opacity: 1;
        }
        .hover_bg{
            opacity: 1;
        }
    }
    &:global(.animate_in){
        animation-name: fadeIn;
        animation-duration: var(--transition1);
    }
    &:global(.animate_out){
        animation-name: fadeOut;
        animation-duration: var(--transition1);
    }
}

@media (max-width: 700px) {
    .got_to_top_button{
        width: 40px;
        height: 40px;
    }
}
</style>