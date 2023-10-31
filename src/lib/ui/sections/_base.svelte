<script>
    export let id          = "";
    export let pretitle    = "Pretitle";
    export let title       = "Title";
    export let withTitle   = true;
    export let wholeScreen = false;
    var wholeScreenClass;
    wholeScreen ? wholeScreenClass = 'whole_screen' : wholeScreenClass = '';
</script>

<div id={id} class="section_wrapper {wholeScreenClass}">
    {#if withTitle === true}
    <span class="pretitle">{pretitle}</span>
    <h2>{title}</h2>
    {/if}
    <slot />
</div>

<style  lang="scss">
.section_wrapper{
    width: 100%;
    padding: 80px var(--gutter);
    display: flex;
    flex-direction: column;
    .pretitle{
        font-size: 14px;
        color: var(--hilight1);
        letter-spacing: 3px;
        text-transform: uppercase;
        font-weight: 500;
        display: block;
    }
    h2{
        font-size: 38px;
        font-weight: 600;
        margin-bottom: 60px;
    }
}

@media (max-width: 1400px) {
    .section_wrapper {
        padding: 60px var(--tablet_gutter);
    }
}

@media (max-width: 992px) {
    .section_wrapper{
        padding: 40px var(--mobile_gutter);
    }
}

@media (max-width: 700px) {
    .section_wrapper {
        .pretitle{
            font-size: 12px;
            letter-spacing: 2px;
        }
        h2{
            font-size: 24px;
            margin-bottom: 20px;
        }
    }
}

.section_wrapper.whole_screen{
    padding-left: 0;
    padding-right: 0;
    .pretitle{
        padding-left: var(--gutter);
        padding-right: var(--gutter);
    }
    h2{
        padding-left: var(--gutter);
        padding-right: var(--gutter);
    }
}

@media (max-width: 1400px) {
    .section_wrapper.whole_screen{
        .pretitle, h2{
            padding-left: var(--tablet_gutter);
            padding-right: var(--tablet_gutter);
        }
    }
}

@media (max-width: 992px) {
    .section_wrapper.whole_screen{
        .pretitle, h2{
            padding-left: var(--mobile_gutter);
            padding-right: var(--mobile_gutter);
        }
    }
}
</style>