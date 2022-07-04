<script>
    import {viewsSetup, viewsState} from '../../../stores/viewsStore.js';
    import SheetPushButton from "../buttons/SheetPushButton.svelte";
    import HorizontalSpace from "../spacing/HorizontalSpace.svelte";

    export let _id;
    export let _class = 'interface';

    let scrollViewSetup = $viewsSetup.find(view => view._id === _id);
    
    $viewsState[_id] = {
        isActive: scrollViewSetup.isActive,
    };
</script>

{#if $viewsState[_id].isActive}
    <ul>
        {#each scrollViewSetup.components as component}
            {#if component.componentType === 'SheetPushButton'}
                <SheetPushButton _id={component.componentId} isChecked={scrollViewSetup.isChecked} _class={_class}/>
            {/if}
            {#if component.componentType === 'HorizontalSpace'}
                <HorizontalSpace  device={component.componentDevice}/>
            {/if}
        {/each}
    </ul>
{/if}

<style>
    ul {
        list-style: none;
        padding: 0.0rem;
        margin: 0.0rem;
    }
</style>