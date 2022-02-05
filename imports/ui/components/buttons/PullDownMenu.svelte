<script>
    import {fade} from 'svelte/transition';
    import {settingsState} from '../../../stores/settingsStore.js';
    import {menusSetup, menusState} from '../../../stores/menusStore.js';
    import DividerHorizontal from "../spacing/DividerHorizontal.svelte";
    import MenuButton from "./MenuButton.svelte";
    import { Random } from 'meteor/random'
    
    export let _id;
    export let menuStateId;

    let menuSetup = $menusSetup.find(menu => menu._id === _id);
    let hasLabels = $settingsState.toolbarButtons.hasLabels;
    let hasArrows = $settingsState.pullDownMenus.hasArrows;
    
    $menusState[menuStateId] = {
        isChecked: menuSetup.isChecked,
        isActive: menuSetup.isActive,
        paneIntWidth: menuSetup.paneIntWidth,
        paneRemWidth: `${menuSetup.paneIntWidth / $settingsState.baseFontSize}rem`,
    };
</script>

<style>
    @media only screen and (min-width: 0px) {
        .pull-down {
            display: none;
            justify-content: left;
            position: absolute;
            z-index: 15;
        }

        .pull-down.has-pull-down-arrow {
            justify-content: center;
        }

        .pull-down-arrow {
            display: none;
            position: absolute;
            width: 4.0rem;
            height: 1.5rem;
            z-index: 3;
            overflow: hidden;
        }

        .pull-down-arrow:after {
            content: '';
            display: none;
            width: 1.9997rem;
            height: 1.9997rem;
            position: absolute;
            top: -0.1rem;
            left: 0.6rem;
            border: 0.1rem solid var(--gray-700);
            background-color: var(--gray-800);
            transform: rotate(45deg);
            transform-origin: 0 100%;
        }

        .pull-down-pane {
            position: absolute;
            z-index: 2;
            border-radius: 0.3rem;
            overflow-x: hidden; 
            overflow-x: auto; 
            padding: 0.4rem 0.0rem;
            box-shadow: 0.0rem 0.0rem 0.8rem var(--black-alpha);
            -webkit-backdrop-filter: blur(1.0rem);
            backdrop-filter: blur(1.0rem);
            border: 0.1rem solid var(--gray-700-alpha);
        }

        .pull-down-pane:after {
            content: " ";
            background-color: var(--gray-900-alpha);
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
        }
        
        .pull-down.has-pull-down-arrow .pull-down-arrow {
            display: flex;
        }
        
        .pull-down.has-pull-down-arrow .pull-down-arrow:after {
            display: block;
        }
        
        .pull-down.has-pull-down-arrow .pull-down-pane {
            top: 1.4rem;
            -webkit-backdrop-filter: none;
            backdrop-filter: none;
            background-color: var(--gray-800);
            border: 0.1rem solid var(--gray-700);
            box-shadow: none;
        }

        .pull-down.has-pull-down-arrow .pull-down-pane:after {
            display: none;
        }

        ul {
            list-style: none;
            padding: 0.0rem;
            margin: 1.6rem 1.6rem 1.2rem;
        }
    }

    @media only screen and (min-width: 768px) {
        .pull-down {
            display: flex;
        }

        ul {
            margin: 0.0rem;
        }
    }
</style>

{#if $menusState[menuStateId].isActive}
    <div 
        class="pull-down {hasArrows ? 'has-pull-down-arrow' : ''}" 
        style="
            top: {$menusState[menuStateId].remTop}; 
            left: {$menusState[menuStateId].remLeft}; 
            width: {$menusState[menuStateId].remWidth}"
        out:fade="{{ delay: 0, duration: 100 }}"
    >
        {#if hasArrows}
            <div class="pull-down-arrow {hasLabels ? 'has-button-labels' : ''}"></div>
        {/if}
        <div class="pull-down-pane {hasLabels ? 'has-button-labels' : ''}" style="width: {$menusState[menuStateId].paneRemWidth}; max-height: {$menusState[menuStateId].paneRemMaxHeight}; left: {$menusState[menuStateId].paneRemLeft}; right: {$menusState[menuStateId].paneRemRight}">
            <ul>
                {#each menuSetup.components as component}
                    {#if component.componentType === 'DividerHorizontal'}
                        <DividerHorizontal />
                    {/if}
                    {#if component.componentType === 'MenuButton'}
                        <MenuButton _id={component.componentId} isChecked={$menusState[menuStateId].isChecked}/>
                    {/if}
                {/each}
            </ul>
        </div>
    </div>
{/if}