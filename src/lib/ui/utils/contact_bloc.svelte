<script>
    import { t } from '$lib/languages/translations';
    //
    import Section     from '$lib/ui/sections/_base.svelte';
    import Svg         from '$lib/ui/basics/svg.svelte';
    import Hidden_link from '$lib/ui/basics/hidden_link.svelte';
</script>

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

<style lang="scss">
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

:global(footer .icons_wrapper){
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>