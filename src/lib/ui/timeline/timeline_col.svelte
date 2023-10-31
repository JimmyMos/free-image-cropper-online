<script>
    export let pretitle = "";
    export let title = "";
</script>

<div class="col">
    <span class="pretitle">{pretitle}</span>
    <span class="col_title">{title}</span>
    <div class="timeline_wrapper">
        <div class="left_bar"></div>
        <slot />
    </div>
</div>

<style lang="scss">
.col{
    display: flex;
    flex-direction: column;
    flex: 1;
    .pretitle{
        font-size: 11px;
        color: var(--hilight1);
        letter-spacing: 2px;
        text-transform: uppercase;
        font-weight: 500;
        display: block;
    }
    .col_title{
        font-size: 22px;
        font-weight: 600;
        margin-bottom: 20px;
    }
    .timeline_wrapper{
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 40px;
        .left_bar{
            position: absolute;
            width: 5px;
            border-radius: 4px;
            height: 100%;
            background-color: var(--cv_left_bar);
        }
    }
}

@media (max-width: 700px) {
    .col{
        .col_title{
            font-size: 18px;
        }
    }
}
</style>