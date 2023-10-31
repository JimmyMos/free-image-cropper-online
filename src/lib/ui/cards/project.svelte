<script>
    import Svg  from '$lib/ui/basics/svg.svelte';
    import { PUBLIC_BASE_URL } from '$env/static/public';
    import Image from '@urami/svelte';
    //
    export let img      = '';
    export let pretitle = '';
    export let title    = '';    
    export let modal_id = '';
</script>

<div class="card" role="button" tabindex="0" paired-modal="{modal_id}">
    <Image
        src="{PUBLIC_BASE_URL}{img}"
        width=400
        alt="{title}"
    />
    <span class="pretitle">{pretitle}</span>
    <span class="title">{title}</span>
</div>

<style lang="scss">
.card{
    display: flex;
    padding: 24px;
    border-radius: 22px;
    flex-direction: column;
    background: var(--card_bg);
    box-shadow: var(--card_boxshadow);
    transition: var(--transition1);
    width: 100%;
    cursor: pointer;
    .pretitle{
        font-size: 12px;
        color: var(--hilight1);
        text-transform: uppercase;
        font-weight: 500;
        display: block;
        margin-bottom: 10px;
    }
    :global(img){
        margin-bottom: 32px;
        padding: 8px;
        background-color: var(--white1);
        border-radius: 12px;
        box-shadow: var(--boxshadow1);
        background-image: var(--gd_blue_purple1);
        max-width: 100%;
    }
    .title{
        font-weight: 600;
        font-size: 20px;
        line-height: 32px;
        margin-bottom: 8px;
    }
    .content{
        font-size: 15px;
        line-height: 22px;
        font-weight: 500;
        letter-spacing: 1px;
    }
    &:hover{
        transform: translateY(-4%);
    }
}

@media (max-width: 700px) {
    .card{
        padding: 12px;
        :global(img){
            margin-bottom: 20px;
            padding: 4px;
        }
        .pretitle{
            margin-bottom: 0;
        }
        .title{
            font-size: 18px;
            line-height: unset;
        }
    }
}
</style>