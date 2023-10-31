<script>
    import { t } from '$lib/languages/translations';
    import { PUBLIC_BASE_URL } from '$env/static/public';
    import Image from '@urami/svelte'
    //
    import Hidden_link from '$lib/ui/basics/hidden_link.svelte';
    export let img = "";
    export let name = "";
    export let company = "";
    export let job = "";
    export let link = "";
    export let mission = "";
    export let date = "";
    export let comment = "";
</script>

<div class="swiper-slide testimony-slide">
    <div class="left">
        <Image
            src="{PUBLIC_BASE_URL}{img}"
            width=500
            alt=""
        />
        <span class="title">{name}</span>
        <span class="pretitle">{company}</span>
        <span class="subtitle">{job}</span>
        {#if link === ''}
        <!-- // -->
        {:else}
        <Hidden_link url="{link}" target="_blank"/>
        {/if}
    </div>
    <div class="right">
        <div class="hook_bar"></div>
        <span class="title">{mission}</span>
        <span class="subtitle">{date}</span>
        <span class="content">"{comment}"</span>
        {#if link === ''}
        <!-- // -->
        {:else}
        <Hidden_link url="{link}" target="_blank"/>
        {/if}
    </div>
</div>

<style  lang="scss">
.testimony-slide{
    display: flex;
    padding: 20px;
    gap: 50px;
    margin-bottom: 20px;
    & > div{
        position: relative;
        display: flex;
        padding: 24px;
        border-radius: 22px;
        flex-direction: column;
        background: var(--card_bg);
        box-shadow: var(--card_boxshadow);
        cursor: pointer;
        &::before{
            content: "";
            position: absolute;
            border-radius: 22px;
            transition: var(--transition);
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: var(--cv_bg);
            opacity: 0;
            transition: 400ms;
        }
        &.left{
            cursor: pointer;
            :global(img){
                z-index: 1;
                border-radius: 22px;
                height: 252px;
                width: 335px;
                object-fit: cover;
                margin-bottom: 40px;
            }
            .pretitle{
                z-index: 1;
                font-size: 11px;
                color: var(--hilight1);
                letter-spacing: 2px;
                text-transform: uppercase;
                font-weight: 500;
                margin-bottom: 6px;
            }
            .title{
                z-index: 1;
                font-size: 20px;
                font-weight: 600;
                margin-bottom: 6px;
            }
            .subtitle{
                z-index: 1;
                font-size: 12px;
            }
        }
        &.right{
            margin-top: 110px;
            width: 100%;
            .title{
                z-index: 1;
                font-size: 26px;
                font-weight: 600;
                margin-bottom: 6px;
            }
            .subtitle{
                z-index: 1;
                font-size: 14px;
                margin-bottom: 30px;
                color: var(--hilight1);
            }
            .content{
                z-index: 1;
                font-size: 18px;
                line-height: 1.2;
                letter-spacing: 1.6px;
            }
            .hook_bar{
                z-index: 1;
                position: absolute;
                width: 80px ;
                border-radius: 4px;
                height: 4px;
                background-color: var(--cv_left_bar);
                transform: translateX(-80px) translateY(40px);
                z-index: -1;
                cursor: pointer;
            }
        }
    }
}

/*Trick to apply effects on ascedning brothers in DOM*/
.testimony-slide{
    pointer-events: none;
}
.testimony-slide > div{
    pointer-events: auto;
}
.testimony-slide:hover > div::before{
    opacity: 1!important;
}

@media (max-width: 1200px) {
    .testimony-slide{
        .left{
            width: 30%;
            :global(img){
                width: unset!important;
                height: 180px!important;
            }
        }
        .right{
            margin-top: unset!important;
            min-width: 60%!important;
            width: max-content;
        }
    }
}

@media (max-width: 700px) {
    .testimony-slide{
        flex-direction: column;
        gap: 16px;
        .left{
            width: 100%;
            :global(img){
                width: unset!important;
                height: 150px!important;
                margin-bottom: 20px!important;
            }
            .title{
                font-size: 18px!important;
            }
            .pretitle, .subtitle{
                font-size: 10px!important;
            }
        }
        .right{
            margin-top: unset!important;
            min-width: 60%!important;
            width: 100%;
            .hook_bar{
                display: none;
            }
            .title{
                font-size: 18px!important;
            }
            .subtitle{
                font-size: 12px!important;
                margin-bottom: 10px!important;
            }
            .content{
                font-size: 14px!important;
            }
        }
    }
}
</style>