<script>
    import {fade} from 'svelte/transition';

    import {appState} from '../../../stores/appStore.js';
    import {menusSetup, menusState} from '../../../stores/menusStore.js';
    
    import DividerHorizontal from "../spacing/DividerHorizontal.svelte";
    import MenuPushButton from "../buttons/MenuPushButton.svelte";
    
    export let _id;
    export let color = 'interface';

    let menuSetup = $menusSetup.find(menu => menu._id === _id);
    let hasLabels = $appState.toolbarButtons.hasLabels;
    
    $menusState[_id] = {
        isChecked: menuSetup.isChecked,
        isActive: menuSetup.isActive,
        paneIntWidth: menuSetup.paneIntWidth,
        paneRemWidth: `${menuSetup.paneIntWidth / $appState.baseFontSize}rem`,
    };
</script>

{#if $menusState[_id].isActive}
    <div id={_id} class="pull-down-menu {hasLabels ? 'has-button-labels' : ''}" style="width: {$menusState[_id].paneRemWidth}; max-height: {$menusState[_id].paneRemMaxHeight}; top: {$menusState[_id].paneRemTop}; left: {$menusState[_id].paneRemLeft}" in:fade="{{duration: 100}}" out:fade="{{duration: 200}}">
        <ul>
            {#each menuSetup.components as component}
                {#if component.componentType === 'DividerHorizontal'}
                    <DividerHorizontal device={component.componentDevice}/>
                {/if}
                {#if component.componentType === 'MenuPushButton'}
                    <MenuPushButton _id={component.componentId} isChecked={$menusState[_id].isChecked} color={color}/>
                {/if}
            {/each}
        </ul>
    </div>
{/if}

<style>
    .pull-down-menu {
        position: absolute;
        z-index: 10;
        border-radius: 0.3rem;
        overflow-x: hidden; 
        overflow-x: auto; 
        padding: 0.4rem 0.0rem;
        box-shadow: 0.0rem 0.0rem 0.9rem var(--black-alpha);
        background-color: var(--gray-800);
    }

    ul {
        list-style: none;
        padding: 0.0rem;
        margin: 0.0rem;
    }
</style>