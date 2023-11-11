<script>
    import { t } from '$lib/languages/translations';
    import { PUBLIC_BASE_URL } from '$env/static/public';
    import Image from '@urami/svelte'
    //
    import Section     from '$lib/ui/sections/_base.svelte';
    import Svg         from '$lib/ui/basics/svg.svelte';
    import Hidden_link from '$lib/ui/basics/hidden_link.svelte';
</script>
 
<Section id="hero_home_section" withTitle={false}>
    <div class="left">
        <span class="welcome">{$t('c.hello')}</span>
        <h1><span>{$t('c.i_am')}</span> <span>Jimmy MostovoiXXX</span></h1>
        <h2>{$t('c.job')} &#11088;</h2>
        <span class="content">{$t('c.presentation')}</span>
        <div class="icons_section_wrapper">
            <div>
                <span>{$t('c.contact')}</span>
                <div class="icons_wrapper">
                    <div class="icon_wrapper with_hover">
                        <Hidden_link url="https://wa.me/+33666469136" target="_blank"/>
                        <Svg icon="/img/icons/phone.svg"/>
                    </div>
                    <div class="icon_wrapper with_hover">
                        <Hidden_link url="mailto:jmostovoi1@gmail.com" target="_blank"/>
                        <Svg icon="/img/icons/email.svg"/>
                    </div>
                    <div class="icon_wrapper with_hover">
                        <Hidden_link url="https://fr.linkedin.com/in/jimmy-mostovoi-3b29951a6" target="_blank"/>
                        <Svg icon="/img/logos/linkedin_logo.svg"/>
                    </div>
                </div>
            </div>
            <div>
                <span>{$t('c.main_skills')}</span>
                <div class="icons_wrapper">
                    <div class="icon_wrapper">
                        <img src="/img/logos/js_logo.png" alt="">
                    </div>
                    <div class="icon_wrapper">
                        <img src="/img/logos/sveltejs.svg" alt="">
                    </div>
                    <div class="icon_wrapper">
                        <img src="/img/logos/vitejs.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="right">
        <div class="img_bg"></div>
        <Image
            src="{PUBLIC_BASE_URL}/img/space.png"
            width=800
            alt=""
        />
        <!--<img src="/img/space.png" alt="">-->
    </div>
</Section>

<style lang="scss">
:global(#hero_home_section){
    padding: calc(60px + 80px) var(--gutter);
    display: flex;
    flex-direction: row;
    /*min-height: 100vh*/;
}
.left{
    width: 60%;
    padding: 0 10% 0 0;
    .welcome{
        font-size: 14px;
        letter-spacing: 3px;
        text-transform: uppercase;
        font-weight: 500;
        display: block;
        margin-bottom: 12px;
    }
    h1 span{
        font-size: 38px;
        font-weight: 600;
        margin-bottom: 8px;
        &:nth-of-type(2){
            color: var(--blue1);
            background: var(--gd_blue_purple2);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
    h2{
        font-size: 26px;
        font-weight: 600;
        margin-bottom: 40px;
    }
    .content{
        font-size: 16px;
        line-height: 30px;
    }
    .icons_section_wrapper{
        margin-top: 40px;
        display: flex;
        & > div{
            display: flex;
            flex-direction: column;
            width: 50%;
            span{
                font-size: 14px;
                text-transform: uppercase;
                letter-spacing: 2px;
                font-weight: 300;
                display: inline-block;
                margin-bottom: 16px;
            }
            .icons_wrapper{
                display: flex;
                gap: 18px;
                .icon_wrapper{
                    position: relative;
                    height: 60px;
                    width: 60px;
                    background-image: var(--card_bg);
                    box-shadow: var(--card_boxshadow);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 8px;
                    transition: 200ms;
                    :global(svg){
                        transition: 200ms ease-out;
                        fill: var(--font_color);
                    }
                    img{
                        height: 30px;
                        width: 38px;
                        object-fit: contain;
                    }
                    &.with_hover:hover{
                        background-image: var(--hero_icon_hover_bg);
                        transform: translateY(-4px);
                        cursor: pointer;
                        :global(svg){
                            fill: var(--white1);
                        }
                    }
                }
            }
        }
    }
}
.right{
    position: relative;
    width: 40%;
    :global(img){
        max-width: 100%;
        transform: translateY(0%) scale(100%);
        animation-name: click_me;
        animation-duration: 4s;
        animation-iteration-count: infinite
    }
    .img_bg{
        position: absolute;
        top: 50%;
        left: 50%;
        border-radius: 50%;
        width: 60%;
        height: 60%;
        background-image: linear-gradient( -45deg, #bd34fe 50%, #47caff 50% );
        filter: blur(72px);
        transform: translate(-50%,-50%);
        animation-name: rotate;
        animation-duration: 14s;
        animation-iteration-count: infinite
    }
}

@media (max-width: 1400px) {
    :global(#hero_home_section){
        padding: 110px 8vw;
        min-height: unset;
    }
    .icons_section_wrapper{
        flex-direction: column;
        width: 100%!important;
        flex-wrap: wrap;
        gap: 40px;
        & > div{
            width: 100%!important;
        }
    }
}

@media (max-width: 1200px) {
    .left{
        width: 100%;
        padding: 0;
            h2{
                margin-bottom: 10px;
            }
    }
    .right{
        display: none;
    }
}

@media (max-width: 992px) {
    :global(#hero_home_section){
        padding: 110px 12px 40px 12px;
    }
}

@media (max-width: 700px) {
    .left{
        .welcome{
            margin-bottom: 0px;
            font-size: 12px;
        }
        h1{
            span{
                font-size: 24px;
                margin-bottom: 2px;
            }
        }
        h2{
            font-size: 16px;
            margin-bottom: 14px;
        }
        .content{
            line-height: 24px;
        }
        .icons_section_wrapper{
            gap: 20px;
            margin-top: 20px;
            & > div{
                margin-bottom: 8px;
                span{
                    margin-bottom: 8px;
                }
            }
        }
    }
}
</style>