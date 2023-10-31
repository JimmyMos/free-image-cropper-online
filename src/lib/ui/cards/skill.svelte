<script>
    import Svg         from '$lib/ui/basics/svg.svelte';
    //
    export let icon = '';
    export let title = '';
    export let content = '';    
</script>

<div class="card">
    <Svg icon="{icon}"/>
    <span class="title">{title}</span>
    <span class="content">{content}</span>
</div>

<style lang="scss">
.card{
    display: flex;
    padding: 24px;
    border-radius: 22px;
    flex-direction: column;
    background: var(---card_bg);
    box-shadow: var(--card_boxshadow);
    transition: 250ms;
    :global(svg){
        margin-bottom: 32px;
        height: 46px;
        width: 46px;
        padding: 8px;
        background-color: var(--skill_card_bg_color);
        border-radius: 12px;
        box-shadow: var(--boxshadow1);
        background-image: var(--gd_blue_purple1);
    }
    .title{
        font-weight: 500;
        font-size: 22px;
        line-height: 32px;
        margin-bottom: 8px;
    }
    .content{
        font-size: 15px;
        line-height: 22px;
        font-weight: 500;
        letter-spacing: 1px;
    }
}

@media (max-width: 700px) {
    .card{
        padding: 12px;
        :global(svg){
            margin-bottom: 18px;
        }
        .title{
            font-size: 18px;
            line-height: unset;
        }
        .content{
            font-size: 13px;
            line-height: unset;
        }
    }
}
</style>