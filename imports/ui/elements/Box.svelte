<script>
    export let title;
    export let backgroundColor = 'white';
    export let hasBorderTop = 'false';
    export let hasBorderBottom = 'false';
</script>

<div class="box">
    {#if title}
        <h1 class="h4 title">{title}</h1>
    {/if}
    <div class="content {backgroundColor} {hasBorderTop? "border-top" : ""} {hasBorderBottom? "border-bottom" : ""}">
        <slot />
    </div>
</div>

<style>
    .box {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        overflow: hidden;
    }

    .title {
        padding: 0.0rem 0.9rem;
        background-color: var(--white);
    }

    .content {
        padding: 0.9rem 0.9rem 0.0rem;
        overflow-x: hidden;
        overflow-y: auto;
        flex-grow: 1;
    }

    .content.border-top {
        border-top: 0.1rem solid;
    }

    .content.border-bottom {
        border-bottom: 0.1rem solid;
    }

    .content.white {
        background-color: var(--white);
        border-color: var(--gray-700);
    }

    .content.gray {
        background-color: var(--gray-800);
        border-color: var(--gray-700);
    }
</style>