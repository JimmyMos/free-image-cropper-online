<script>
    import Svg from '$lib/ui/basics/svg.svelte';
    import Hidden_link from '$lib/ui/basics/hidden_link.svelte';
    import { PUBLIC_BASE_URL } from '$env/static/public';
    import Image from '@urami/svelte';
    //
    export let img = '';
    export let name = '';    
    export let url = '';
</script>

<div class="client">
    <div class="logo">
        <!--<img src="{img}" alt="">-->
        <Image
            src="{PUBLIC_BASE_URL}{img}"
            width=200
            alt=""
        />
    </div>
    <div class="name_wrapper">
        <span class="name">{name}</span>
    </div>
    <Hidden_link url="{url}" label="{name}" target="_blank"/>
</div>

<style lang="scss">
.client{
    position: relative;
    display: flex;
    padding: 16px;
    border-radius: 22px;
    flex-direction: column;
    align-items: center;
    background: var(--card_bg);
    box-shadow: var(--card_boxshadow);
    transition: var(--transition1);
    cursor: pointer;
    &:hover{
        transform: translateY(-4%);
    }
    .logo{
        padding-bottom: 22px;
        aspect-ratio: 16/9;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        :global(img){
            max-width: 100%;
            max-height: 100%;
            width: auto;
        }
    }
    .name_wrapper{
        width: 100%;
        margin-top: auto;
        padding-top: 16px;
        border-top: var(--border1);
        display: flex;
        align-items: center;
        justify-content: center;
        .name{
            font-weight: 500;
            font-size: 20px;
            text-align: center;
        }
    }
}

@media (max-width: 1400px) {
    .client {
        .name{
            font-size: 16px!important;
        }
    }
} 

@media (max-width: 700px) {
    .client {
        padding: 12px;
        .logo{
            height: 60px!important;
        }
        .name{
            font-size: 14px!important;
        }
    }
}
</style>