<script>
    export let isList = false;
</script>

<div class="group-container">
    <div class="group-wrapper {$$props.menuId? '' : 'no-button-container'} {isList? 'list' : ''}">
        <slot />
    </div>
</div>

<style>
    .group-container {
        display: inline-block;
        margin:  0rem 0.3rem;
    }

    .group-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        height: auto;
    }

    .group-wrapper.list {
        flex-direction: column;
    }

    .group-wrapper:not(.list) :global(button.grouped) {
        margin-right: 0.0rem;
        margin-left: 0.0rem;
        border-radius: 0.0rem;
        border-left: none;
        border-right: 0.1rem solid;
    }

    .group-wrapper:not(.list) :global(.no-button-container button.grouped:first-child),
    .group-wrapper:not(.list) :global(.button-container:first-child button.grouped)  {
        border-radius: 0.3rem 0.0rem 0.0rem 0.3rem;
        border-left: none;
        margin-right: 0.0rem;
    }   

    .group-wrapper:not(.list) :global(.no-button-container:not(.list) button.grouped:last-child),
    .group-wrapper:not(.list) :global(.button-container:last-child button.grouped) {
        border-radius: 0.0rem 0.3rem 0.3rem 0.0rem;
        border-left: none;
        margin-left: 0.0rem;
    } 
</style>