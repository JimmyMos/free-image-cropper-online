<script>
    /**
     * Modals are appended to the body on page load.
     * Use openModal() or closeModal() functions.
     * Clicking on any element with [paired-modal=modal_id] will trigger opendModal().
     */
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';
    //
    import { findParent, hasClass, addClass, removeClass }  from '$lib/helpers/dom_helper'
    //
    import Svg from '$lib/ui/basics/svg.svelte';
    //
    export let id   = 'test_modal';
    export let type = 'default';
    //
    onMount(() => {
        if(browser){
            var elBody      = document.querySelector('body');
            var elModalList = document.querySelectorAll('.modal_wrapper');
            //
            function openModal(id){
                var evOpendModal = new CustomEvent('stateChanged', {
                    'detail' : {
                        'name'    : 'isModalDisplayed',
                        'state'   : true,
                        'modalId' : id,
                    }
                });
                document.dispatchEvent(evOpendModal);
                //
                var elModal = document.querySelector(`.modal_wrapper[modal_id=${id}]`)
                removeClass(elModal, 'hidden');
                addClass(elModal, 'animate_in');
                removeClass(elModal, 'animate_out');
            }
            function closeModal(id){
                var evClosedModal = new CustomEvent('stateChanged', {
                    'detail' : {
                        'name'    : 'isModalDisplayed',
                        'state'   : false,
                        'modalId' : id,
                    }
                });
                document.dispatchEvent(evClosedModal);
                //
                var elModal = document.querySelector(`.modal_wrapper[modal_id=${id}]`)
                removeClass(elModal, 'animate_in');
                addClass(elModal, 'animate_out');
                elModal.addEventListener('animationend', function(e){
                    var element       = e.target;
                    var animationName = e.animationName;
                    //
                    if(animationName.match(/fadeOut/)){
                    addClass(element, 'hidden');
                    }
                })
            }
            //
            document.querySelectorAll('[paired-modal]').forEach((el, i) => {
                el.addEventListener('click', function(event){
                    openModal(event.currentTarget.getAttribute('paired-modal'));
                })    
            });
            document.querySelectorAll('.modal_wrapper [close_modal_btn]').forEach((el, i) => {
                el.addEventListener('click', function(event){
                    var id = findParent(event.currentTarget, '.modal_wrapper').getAttribute('modal_id');
                    closeModal(id);
                })    
            });
            elModalList.forEach((el, i) => {
                el.addEventListener('click', function(event){
                    if (event.target !== this){
                        return;
                    }
                    var id = event.currentTarget.getAttribute('modal_id');
                    closeModal(id);
                })    
            });
            elModalList.forEach((el, i) => {
                var copy = el;
                el.remove();
                elBody.append(copy);
            })
        }
    })
</script>

<div class="modal_wrapper hidden" type="{type}" modal_id="{id}">
    <div class="modal_container">
        <slot />
        <div close_modal_btn>
            <div class="hover_bg"></div>
            <Svg icon="/img/icons/cross.svg"/>
        </div>
    </div>
</div>

<style lang="scss">
:global(.modal_wrapper){
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    bottom: 0;
    height: 100vh;
    width: 100%;
    background-color: var(--hide_bg);
    z-index: 100;
    .modal_container{
        position: relative;
        display: flex;
        gap: 40px;
        max-height: 90vh;
        width: 100%;
        max-width: var(--general_max_width);
        margin: 0 var(--gutter);
        background: var(--card_bg);
        box-shadow: var(--card_boxshadow);
        border-radius: 22px;
        padding: 32px;
        [close_modal_btn]{
            position: absolute;
            right: 8px;
            top: 8px;
            width: 36px;
            height: 36px;
            border-radius: 100%;
            box-shadow: var(--boxshadow1);
            overflow: hidden;
            cursor: pointer;
            :global(svg){
                z-index: 2;
                position: relative;
                width: 100%;
                height: 100%;
                padding: 10px;
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
                }
                .hover_bg{
                    opacity: 1;
                }
            }
        }
    }  
}

:global(.modal_wrapper.animate_in){
       animation-name: fadeIn;
       animation-duration: 300ms;
       .modal_container{
        animation-name: infromTop;
        animation-duration: 400ms;
        transition-timing-function: ease-out;
       }
    }  
:global(.modal_wrapper.animate_out){
    animation-name: fadeOut2;
    animation-duration: 500ms;
    .modal_container{
    animation-name: outToTop;
    animation-duration: 500ms;
    transition-timing-function: ease-out;
    }
} 

@media (max-width: 1400px) {
    .modal_wrapper{
        .modal_container{
            margin: 0 var(--tablet_gutter);
        }
    }
}

@media (max-width: 1200px) {
    .modal_wrapper{
        .modal_container{
            flex-direction: column;
        }
    }
}

@media (max-width: 700px) {
    .modal_wrapper{
        .modal_container{
            max-height: 80vh;
            gap: 18px;
            margin: 0 var(--mobile_gutter);
            [close_modal_btn]{
                width: 28px;
                height: 28px;
                :global(svg){
                    padding: 8px;
                }
            }
        }
    }
}
</style>