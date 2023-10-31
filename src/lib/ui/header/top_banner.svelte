<script>
    import Svg from "$lib/ui/basics/svg.svelte";
    import Hidden_link from '$lib/ui/basics/hidden_link.svelte';
</script>

<div class="top_banner_wrapper">
    <div class="rating_wrapper" upwork>
        <img src="/img/logos/upwork.png" alt="">
        <span>Upwork :</span>
        <div class="stars">
            <Svg icon="/img/icons/star2.svg"/>
            <Svg icon="/img/icons/star2.svg"/>
            <Svg icon="/img/icons/star2.svg"/>
            <Svg icon="/img/icons/star2.svg"/>
            <Svg icon="/img/icons/star2.svg"/>
        </div>
        <Hidden_link url="https://www.upwork.com/freelancers/~017698fdbde88c4cc4" label="Jimmy Mostovoi | Upwork account" target="_blank"/>
    </div>
    <div class="separator">
        <span>/</span>
    </div>
    <div class="rating_wrapper" work="malt">
        <img src="/img/logos/malt.png" alt="">
        <span>Malt :</span>
        <div class="stars">
            <Svg icon="/img/icons/star2.svg"/>
            <Svg icon="/img/icons/star2.svg"/>
            <Svg icon="/img/icons/star2.svg"/>
            <Svg icon="/img/icons/star2.svg"/>
            <Svg icon="/img/icons/star2.svg"/>
        </div>
        <Hidden_link url="https://www.malt.fr/profile/jimmymostovoi" label="Jimmy Mostovoi | Upwork account" target="_blank"/>
    </div>
</div>

<style lang="scss">
.top_banner_wrapper{
    z-index: 5;
    height: 30px;
    position: fixed;
    background-color: var(--mobile_menu_bg);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    .rating_wrapper{
        position: relative;
        display: flex;
        align-items: center;
        img{
            height: 16px;
            width: 16px;
            margin-right: 6px;
        }
        span{
            font-size: 11px;
            font-weight: 500;
            margin-right: 10px;
        }
        .stars{
            display: flex;
            gap: 2px;
            :global(svg){
                height: 12px;
                width: 12px;
            }
        }
    }
    .rating_wrapper[work=malt]{
        :global(svg){
            fill: #FC5656;
        }
    }
    .rating_wrapper[upwork]{
        :global(svg){
            fill: #14A800;
        }
    }
}
</style>