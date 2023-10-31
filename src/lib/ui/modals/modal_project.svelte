<script>
    import { t } from '$lib/languages/translations';
    import { PUBLIC_BASE_URL } from '$env/static/public';
    import Image from '@urami/svelte';
    //
    import Modal  from "$lib/ui/modals/_base.svelte";
    import Button from '$lib/ui/basics/button.svelte';
    //
    export let title   = 'Project modal test';
    export let id      = 'project_test_modal';
    export let type    = 'project';
    export let link    = '';
    export let cat     = '';
    export let img     = '';
    export let content = 'Default content';
</script>

<Modal id={id} type={type} >
    <div class="left">
        <Image
            src="{PUBLIC_BASE_URL}{img}"
            width=1280
        />
    </div>
    <div class="right">
        <span class="pretitle">{cat}</span>
        <span class="title">{title}</span>
        <span class="content">{@html content}</span>
        <Button label={$t('c.pf_button')} url={link} target='_blank'/>
    </div>
</Modal>

<style lang="scss">
.left{
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    :global(img){
        box-shadow: var(--boxshadow1);
        background-image: var(--gd_blue_purple1);
        padding: 8px;
        border-radius: 12px;
        max-width: 100%;
    }
}
.right{
    width: 50%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    .pretitle{
        font-size: 14px;
        color: var(--hilight1);
        letter-spacing: 3px;
        text-transform: uppercase;
        font-weight: 500;
        margin-bottom: 4px;
    }
    .title{
        font-size: 22px;
        font-weight: 600;
        margin-bottom: 30px;
    }
    .content{
        margin-bottom: 30px;
        font-weight: 500;
        overflow-y: auto;
    }
}

@media (max-width: 1200px) {
    .left{
        width: 100%;
        :global(img){
            width: 300px;
            max-width: 90%;
        }
    }
    .right{
        width: 100%;
    }
}

@media (max-width: 700px) {
    .left{
        img{
           //
        }
    }
    .right{
        .pretitle{
            font-size: 11px;
            margin-bottom: 0;
            letter-spacing: 2px;
        }
        .title{
            font-size: 16px;
            line-height: unset;
            margin-bottom: 12px;
        }
        .content{
            font-size: 13px;
            margin-bottom: 16px;
        }
        .button{
            span{
                font-size: 14px;
            }
        }
    }
}
</style>
