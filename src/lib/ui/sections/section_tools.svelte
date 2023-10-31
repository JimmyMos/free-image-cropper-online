<script>
    import { t } from '$lib/languages/translations';
    import { PUBLIC_BASE_URL } from '$env/static/public';
    import Image from '@urami/svelte'
    //
    import Section from '$lib/ui/sections/_base.svelte';
    //
    export let data = [
        [
            {"img" : "/img/logos/jquery_logo.png", "alt" : "Logo Jquery"},
            {"img" : "/img/logos/jquery_logo.png", "alt" : "Logo Jquery"},
        ],
        [
            {"img" : "/img/logos/jquery_logo.png", "alt" : "Logo Jquery"},
            {"img" : "/img/logos/jquery_logo.png", "alt" : "Logo Jquery"},
        ],
    ]
</script>

<Section id="section_tools" pretitle={$t('c.tools_pretitle')} title={$t('c.tools_title')}>
    <div class="slider_wrapper">
        <div class="hide"></div>
        <div class="hide"></div>
        {#each data as row}
        <div class="slider_row">
            <div>
                {#each row as tool}
                <!--<img src={tool.img} alt={tool.alt} />-->
                <Image
                    src="{PUBLIC_BASE_URL}{tool.img}"
                    width=200
                    alt={tool.alt}
                />
                {/each}
            </div>
            <div>
                {#each row as tool}
                <Image
                    src="{PUBLIC_BASE_URL}{tool.img}"
                    width=200
                    alt={tool.alt}
                />
                {/each}
            </div>
        </div>
        {/each}
    </div>      
</Section>

<style  lang="scss">
.slider_wrapper{
	position: relative;
    overflow: hidden;
    .hide{
        width: 220px;
        height: 100%;
        position: absolute;
        z-index: 1;
        transition: var(--transition1);
        background: linear-gradient(270deg,#ffffff00 0%,var(--bg_color) 80%,var(--bg_color) 100%);
    }
    .hide:nth-of-type(2){
        right: 0;
        background: linear-gradient(90deg,#ffffff00 0%,var(--bg_color) 80%,var(--bg_color) 100%);
    }
    .slider_row{
        display: flex;
        justify-content: space-between;
        align-content: center;
        padding: 20px 0px;
        animation-name: infinite_slider;
        animation-duration: 30s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        width: fit-content;
        &:nth-of-type(even){
            animation-name: infinite_slider_reverse;
        }
        & > div{
            display: flex; 
            gap: 80px; 
            padding: 0 40px;
            :global(img){
                height: 44px!important;
                object-fit: contain;
                opacity: 0.7;
                transition: var(--transition1);
                width: auto;
                &:hover{
                    opacity: 1;
                }
            }
        }
    }
}

@media (max-width: 700px) {
    .slider_wrapper{
        .hide{
            width: 70px!important;
        }
        .slider_row{
            padding: 10px 0px;
            & > div{
                gap: 20px;
                padding: 0 10px;
                :global(img){
                    height: 28px!important;
                }
            }
        }
    }
}
</style>