<script>
    export let title;
</script>

<div class="box">
    {#if title}
        <h1 class="h4 title">{title}</h1>
    {/if}
    <div class="content">
        <slot />
    </div>
</div>

<style>
    .box {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        overflow: hidden;
        padding: 0.9rem 0.9rem 0.0rem;
    }

    .title {
        margin: 0.0rem 0.0rem 0.9rem;
    }
    .content {
        overflow-x: hidden;
        overflow-y: auto;
    }
</style>