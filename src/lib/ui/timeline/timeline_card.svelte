<script>
    // I don't really understand how I did to center the button on the left so please don't change the values or it will kill the alignment
    import Hidden_link from "$lib/ui/basics/hidden_link.svelte";
    import { PUBLIC_BASE_URL } from '$env/static/public';
    import Image from '@urami/svelte';
    //
    export let logo = "";
    export let title = "";
    export let subtitle = "";
    export let content = "";
    export let url = ""
</script>

<div class="item_wrapper">
    <div class="hook_bar">
        <div class="hook_circle"></div>
    </div>
    <Image
        src="{PUBLIC_BASE_URL}{logo}"
        width=240
        alt="{title}"
        class="logo"
    />
    <span class="title">{title}</span>
    <span class="subtitle">{subtitle}</span>
    <span class="content">{@html content}</span>
    <Hidden_link url={url} target="_blank" />
</div>

<style lang="scss">
.item_wrapper{
    display: flex;
    position: relative;
    margin: 0 40px;
    padding: 24px;
    border-radius: 12px;
    flex-direction: column;
    background: var(--card_bg);
    box-shadow: var(--card_boxshadow);
    transition: var(--transition1);
    cursor: pointer;
    &::before{
        content: "";
        position: absolute;
        border-radius: 12px;
        transition: var(--transition);
        width: 100%;
        height: 100%;
        border-radius: 6px;
        top: 0;
        left: 0;
        background: var(--cv_bg);
        opacity: 0;
        transition: var(--transition1);
    }
    &:hover{
        &::before{
            opacity: 1;
        }
        .hook_circle{
            background-color: var(--hilight1)!important;
        }
        .subtitle{
            color: var(--hilight1)!important;
        }
        .content{
            color: var(--cv_content_hover)!important;
        }
    }
    .hook_bar{
        position: absolute;
        width: 36px ;
        border-radius: 4px;
        height: 4px;
        background-color: var(--cv_left_bar);
        transform: translateX(-60px) translateY(20px);
        .hook_circle{
            position: absolute;
            width: 6px;
            border-radius: 100%;
            height: 6px;
            background-color: var(--bg_color);
            /*outline: solid 4px var(--cv_left_bar);*/
            box-shadow: 0 0 0 4px var(--cv_left_bar);
            top: 50%;
            left: 0;
            transform: translate(calc(-100% + 2px), -50%);
            transition: var(--transition1);
            overflow: hidden;
        }
    }
    :global(.logo){
        z-index: 1;
        height: 60px;
        max-width: 200px;
        margin-bottom: 12px;
        object-fit: contain;
        object-position: left;
    }
    .title{
        z-index: 1;
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 4px;
    }
    .subtitle{
        z-index: 1;
        font-size: 11px;
        color: #7c838e;
        margin-bottom: 30px;
        transition: var(--transition1);
    }
    .content{
        z-index: 1;
        color: #7c838e;
        transition: var(--transition1);
    }
}

@media (max-width: 1200px) {
    .item_wrapper{
        margin-right: 0!important;
    }
}

@media (max-width: 700px) {
    :global(.logo){
        height: 40px!important;
    }
}
</style>