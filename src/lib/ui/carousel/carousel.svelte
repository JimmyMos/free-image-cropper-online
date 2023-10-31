<script>
    import { t } from '$lib/languages/translations';
    import { onMount }     from 'svelte';
    import { browser }     from '$app/environment';
    //
    import Section     from '$lib/ui/sections/_base.svelte';
    import Hidden_link from '$lib/ui/basics/hidden_link.svelte';
    import Svg         from '$lib/ui/basics/svg.svelte';
    //
    // core version + navigation, pagination modules:
    import Swiper from 'swiper';
    import { Navigation, Pagination } from 'swiper/modules';
    // import Swiper and modules styles
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    //
    export let id = 'id';
    //
    onMount(() => {
        if(browser){
            var elSwipper         = document.querySelector(`#${id}.swiper`);
            var swipperNext       = elSwipper.querySelector('.swip-next');
            var swipperPrev       = elSwipper.querySelector('.swip-prev');
            var swipperPagination = elSwipper.querySelector('.swiper-pagination');
            //
            const swiper = new Swiper(elSwipper, {
                modules: [Navigation, Pagination],
                // Optional parameters
                loop: true,
                // If we need pagination
                pagination: {
                    el: swipperPagination,
                    type: 'bullets',
                    clickable: true
            },
            });
            swipperNext.addEventListener('click', e => {
                elSwipper.swiper.slideNext();
            });
            swipperPrev.addEventListener('click', e => {
                elSwipper.swiper.slidePrev();
            });
            
	    }
    });
</script>

<!-- Slider main container -->
<div id={id} class="swiper">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
        <!-- Slides -->
        <slot />
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>
    <!-- If we need navigation buttons -->
    <div class="control_wrapper">
        <div class="swip-prev">
            <Svg icon="/img/icons/chevron.svg" />
        </div>
        <div class="swip-next">
            <Svg icon="/img/icons/chevron.svg" />
        </div>
    </div>
    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar"></div>
</div>

<style  lang="scss">
.swiper{
    width: 100%;
    max-width: 1400px;
    .control_wrapper{
        position: absolute;
        top: 20px;
        right: 20px;
        z-index: 1;
        display: flex;
        gap: 20px;
        & > div{
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 68px;
            width: 68px;
            padding: 12px;
            border-radius: 12px;
            background: var(--card_bg);
            box-shadow: var(--card_boxshadow);
            cursor: pointer;
            &::before{
                content: "";
                position: absolute;
                border-radius: 12px;
                transition: var(--transition);
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                background: var(--cv_bg);
                opacity: 0;
                transition: 400ms;
            }
            &:hover::before{
                opacity: 1;
            }
            &:hover{
                :global(svg){
                    fill: var(--font_color);
                }
            }
            :global(svg){
                height: 24px;
                width: 24px;
                fill: #7c838e;
            }
        }
        :global(.swip-prev svg){
            transform: rotate(90deg);
        }
        :global(.swip-next svg){
            transform: rotate(270deg);
        }
    }
}

:global(.swiper-pagination-bullet){
    background-color: var(--hilight1)!important;
    transition: var(--transition1);
}

@media (max-width: 1200px) {
    .control_wrapper{
        display: none!important;
    }
}
</style>