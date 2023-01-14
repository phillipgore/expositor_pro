<script>
    import {fade} from 'svelte/transition';
    import {sheetState} from '../../stores/store.js';
    
    export let _id;

    $sheetState[_id]  = {
        _id: _id,
        isActive: false,
    };
</script>

{#if $sheetState[_id].isActive}
    <div class="cover" in:fade="{{duration: 100}}" out:fade="{{duration: 200}}">
        <div class="sheet">
            <slot/>
        </div>
    </div>
{/if}

<style>
    .cover {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        background-color: var(--black-alpha);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .sheet {
        width: 48.0rem;
        height: 35.1rem;
        background-color: var(--white);
        border-radius: 1.2rem;
        box-shadow: 0.0rem 0.0rem 0.9rem var(--black-alpha);
        position: relative;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }
</style>