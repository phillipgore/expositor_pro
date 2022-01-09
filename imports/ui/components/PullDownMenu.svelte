<script>
    import {fade} from 'svelte/transition';
    import {settingsState} from '../../modules/stores/settingsStore.js';
    import {menusSetup, menusState} from '../../modules/stores/menusStore.js';
    import {getIcon} from '../../modules/stores/iconsStore.js';
    import Spacing from "./Spacing.svelte";
    
    export let _id = _id;

    let menuSetup = $menusSetup.find(menu => menu._id === _id);
    let menuItems = menuSetup.menuItems;
    let hasLabels = $settingsState.toolbarButtons.hasLabels;
    let hasArrows = $settingsState.pullDownMenus.hasArrows;
    
    $menusState[_id] = {
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
            background-color: var(--gray-900);
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
            box-shadow: 0.0rem 0.0rem 0.8rem var(--black-alpha-15);
            -webkit-backdrop-filter: blur(1.0rem);
            backdrop-filter: blur(1.0rem);
            border: 0.1rem solid var(--gray-700-alpha-65);
        }

        .pull-down-pane:after {
            content: " ";
            background-color: var(--gray-800-alpha-69);
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
            background-color: var(--gray-900);
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

        li {
            display: flex;
            align-items: center;
            padding: 0.0rem;
            margin: 0.0rem;
            overflow: hidden;
        }

        li button,
        li button:hover:enabled {
            display: flex;
            width: 100%;
            align-items: center;
            color: var(--black);
            background: var(--white);
            border: none;
            border-radius: 0.3rem;
            text-decoration: none;
            font-size: 1.6rem;
            padding: 0.9rem 1.5rem;
            margin: 0.0rem 0.0rem 0.4rem;
        }

        li button .main-text {
            white-space: nowrap;
        }

        li button:disabled .main-text {
            color: var(--gray-500)
        }

        li button .text-right {
            text-align: right;
            width: 7.2rem;
            flex-grow: 4;
            display: none;
            color: var(--gray-500)
        }

        .icon-container,
        .shape-container  {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 1.7rem;
            width: 1.7rem;
            margin-right: 0.6rem;
        }

        li button .icon-left {
            height: 1.7rem;
            fill: var(--gray-300);
            max-width: 1.5rem;
        }

        li button .icon-left.inactive {
            fill: transparent;
        }

        li button:disabled .icon-left {
            fill: var(--gray-500)
        }

        li button .circle {
            height: 1.6rem;
            width: 1.6rem;
            border-radius: 0.8rem;
            border: solid 0.1rem;
        }

        li button:enabled .circle.red { border-color: var(--red); background-color: var(--red-light); }
        li button:enabled .circle.orange { border-color: var(--orange); background-color: var(--orange-light); }
        li button:enabled .circle.yellow { border-color: var(--yellow); background-color: var(--yellow-light); }
        li button:enabled .circle.green { border-color: var(--green); background-color: var(--green-light); }
        li button:enabled .circle.aqua { border-color: var(--aqua); background-color: var(--aqua-light); }
        li button:enabled .circle.blue { border-color: var(--blue); background-color: var(--blue-light); }
        li button:enabled .circle.purple { border-color: var(--purple); background-color: var(--purple-light); }
        li button:enabled .circle.pink { border-color: var(--pink); background-color: var(--pink-light); }

        li button:disabled .circle.red,
        li button:disabled .circle.orange,
        li button:disabled .circle.yellow,
        li button:disabled .circle.green,
        li button:disabled .circle.aqua,
        li button:disabled .circle.blue,
        li button:disabled .circle.purple,
        li button:disabled .circle.pink { border-color: var(--gray-700); background-color: var(--gray-700); }
    }

    @media only screen and (min-width: 768px) {
        .pull-down {
            display: flex;
        }

        ul {
            margin: 0.0rem;
        }
        
        li button,
        li button:hover:enabled {
            background: transparent;
            border-radius: 0.3rem;
            font-size: 1.3rem;
            padding: 0.6rem;
            margin: 0.0rem 0.4rem;
        }

        li button:hover:enabled {
            color: var(--white);
            background-color: var(--interface-blue);
        }

        li button .main-text {
            white-space: nowrap;
        }

        li button .text-right {
            display: block;
        }

        li button:hover:enabled .text-right {
            color: var(--white);
        }

        li button .icon-container,
        li button .shape-container  {
            height: 1.4rem;
            width: 1.4rem;
        }

        li button .icon-left {
            max-height: 1.2rem;
            max-width: 1.2rem;
        }

        li button:hover:enabled .icon-left {
            fill: var(--white);
        }

        li button:hover:enabled .icon-left.inactive {
            fill: transparent;
        }

        li button .circle {
            height: 1.4rem;
            width: 1.4rem;
            border-radius: 0.7rem;
        }
    }
</style>

{#if $menusState[_id].isActive}
    <div 
        class="pull-down {hasArrows ? 'has-pull-down-arrow' : ''}" 
        style="
            top: {$menusState[_id].remTop}; 
            left: {$menusState[_id].remLeft}; 
            width: {$menusState[_id].remWidth}"
        out:fade="{{ delay: 0, duration: 100 }}"
    >
        {#if hasArrows}
            <div class="pull-down-arrow {hasLabels ? 'has-button-labels' : ''}"></div>
        {/if}
        <div class="pull-down-pane {hasLabels ? 'has-button-labels' : ''}" style="width: {$menusState[_id].paneRemWidth}; max-height: {$menusState[_id].paneRemMaxHeight}; left: {$menusState[_id].paneRemLeft}; right: {$menusState[_id].paneRemRight}">
            <ul>
                {#each menuItems as menuItem}
                    {#if menuItem.componentType === 'Spacing'}
                        <Spacing _id={menuItem.componentId} />
                    {:else}
                        <li>
                            <button disabled="{menuItem.isDisabled}"> 
                                {#if menuSetup.isChecked}
                                    <div class="icon-container">
                                        <svg class="icon-left {menuItem.isActive ? '' : 'inactive'}" viewBox="{getIcon('check').viewBox}">
                                            <path d={getIcon('check').d}/>
                                        </svg>
                                    </div>
                                {:else if menuItem.iconName}
                                    <div class="icon-container">
                                        <svg class="icon-left" viewBox="{getIcon(menuItem.iconName).viewBox}">
                                            <path d={getIcon(menuItem.iconName).d}/>
                                        </svg>
                                    </div>
                                {/if}
                                {#if menuItem.shapeClass}
                                    <div class="shape-container">
                                        <div class="{menuItem.shapeClass} {menuItem.shapeColorClass}"></div>
                                    </div>
                                {/if}
                                <div class="main-text">{menuItem.label}</div>
                                {#if menuItem.shortcut}
                                    <div class="text-right">{@html menuItem.shortcut}</div>
                                {/if}
                            </button>
                        </li>
                    {/if}
                {/each}
            </ul>
        </div>
    </div>
{/if}