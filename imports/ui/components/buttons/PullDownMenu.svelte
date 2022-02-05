<script>
    import {fade} from 'svelte/transition';
    import {settingsState} from '../../../stores/settingsStore.js';
    import {menusSetup, menusState} from '../../../stores/menusStore.js';
    import DividerHorizontal from "../spacing/DividerHorizontal.svelte";
    import MenuButton from "./MenuButton.svelte";
    
    export let _id;
    export let menuStateId;
    export let color = 'interface';

    let menuSetup = $menusSetup.find(menu => menu._id === _id);
    let hasLabels = $settingsState.toolbarButtons.hasLabels;
    
    $menusState[menuStateId] = {
        isChecked: menuSetup.isChecked,
        isActive: menuSetup.isActive,
        paneIntWidth: menuSetup.paneIntWidth,
        paneRemWidth: `${menuSetup.paneIntWidth / $settingsState.baseFontSize}rem`,
    };
</script>

{#if $menusState[menuStateId].isActive}
    <div class="pull-down-menu {hasLabels ? 'has-button-labels' : ''}" style="width: {$menusState[menuStateId].paneRemWidth}; max-height: {$menusState[menuStateId].paneRemMaxHeight}; top: {$menusState[menuStateId].paneRemTop}; right: {$menusState[menuStateId].paneRemRight}">
        <ul>
            {#each menuSetup.components as component}
                {#if component.componentType === 'DividerHorizontal'}
                    <DividerHorizontal />
                {/if}
                {#if component.componentType === 'MenuButton'}
                    <MenuButton _id={component.componentId} isChecked={$menusState[menuStateId].isChecked} color={color}/>
                {/if}
            {/each}
        </ul>
    </div>
{/if}

<style>
    @media only screen and (min-width: 0px) {
        .pull-down-menu {
            position: absolute;
            z-index: 10;
            border-radius: 0.3rem;
            overflow-x: hidden; 
            overflow-x: auto; 
            padding: 0.4rem 0.0rem;
            box-shadow: 0.0rem 0.0rem 0.8rem var(--black-alpha);
            -webkit-backdrop-filter: blur(1.0rem);
            backdrop-filter: blur(1.0rem);
            border: 0.1rem solid var(--gray-700-alpha);
        }

        .pull-down-menu:after {
            content: " ";
            background-color: var(--gray-900-alpha);
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
        }

        ul {
            list-style: none;
            padding: 0.0rem;
            margin: 1.6rem 1.6rem 1.2rem;
        }
    }

    @media only screen and (min-width: 768px) {
        ul {
            margin: 0.0rem;
        }
    }
</style>