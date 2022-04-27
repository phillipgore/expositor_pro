<script>
    export let device;
</script>

<div class="horizontal-divider {device}"></div>

<style>
    .horizontal-divider {
        height: auto;
        margin-top: 0.4rem;
        border-top: 0.1rem solid var(--gray-700);
        padding-bottom: 0.4rem;
    }
</style>