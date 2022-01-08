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
        paneRemWidth: `${menuSetup.paneIntWidth / 10}rem`,
    };
</script>

<style>
    @media only screen and (min-width: 0px) {
        .dropdown {
            display: none;
            justify-content: left;
            position: absolute;
            z-index: 15;
        }

        .dropdown.has-dropdown-arrow {
            justify-content: center;
        }

        .dropdown-arrow {
            display: none;
            position: absolute;
            width: 4.0rem;
            height: 1.5rem;
            z-index: 3;
            overflow: hidden;
        }

        .dropdown-arrow:after {
            content: '';
            display: none;
            width: 1.9997rem;
            height: 1.9997rem;
            position: absolute;
            top: -0.1rem;
            left: 0.6rem;
            border: 0.1rem solid rgb(181, 180, 179);
            background-color: rgb(242, 241, 240);
            transform: rotate(45deg);
            transform-origin: 0 100%;
        }

        .dropdown-pane {
            position: absolute;
            z-index: 2;
            border-radius: 0.3rem;
            overflow-x: hidden; 
            overflow-x: auto; 
            padding: 0.4rem 0.0rem;
            box-shadow: 0.0rem 0.0rem 0.8rem rgba(0, 0, 0, 0.15);
            -webkit-backdrop-filter: blur(1.0rem);
            backdrop-filter: blur(1.0rem);
            border: 0.1rem solid rgba(181, 180, 179, 0.65);
        }

        .dropdown-pane:after {
            content: " ";
            background-color: rgba(235, 235, 235, 0.69);
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
        }
        
        .dropdown.has-dropdown-arrow .dropdown-arrow {
            display: flex;
        }
        
        .dropdown.has-dropdown-arrow .dropdown-arrow:after {
            display: block;
        }
        
        .dropdown.has-dropdown-arrow .dropdown-pane {
            top: 1.4rem;
            -webkit-backdrop-filter: none;
            backdrop-filter: none;
            background-color: rgb(242, 241, 240);
            border: 0.1rem solid rgb(181, 180, 179);
            box-shadow: none;
        }

        .dropdown.has-dropdown-arrow .dropdown-pane:after {
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
            color: rgb(0, 0, 0);
            background: rgb(255, 255, 255);
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
            color: rgb(136, 135, 134)
        }

        li button .text-right {
            text-align: right;
            width: 7.2rem;
            flex-grow: 4;
            display: none;
            color: rgb(136, 135, 134)
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
            fill: rgb(84, 83, 82);
            max-width: 1.5rem;
        }

        li button .icon-left.inactive {
            fill: transparent;
        }

        li button:disabled .icon-left {
            fill: rgb(136, 135, 134)
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
        li button:disabled .circle.pink { border-color: var(--gray); background-color: var(--gray-light); }
    }

    @media only screen and (min-width: 768px) {
        .dropdown {
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
            color: rgb(255, 255, 255);
            background-color: rgb(26, 140, 255);
        }

        li button .main-text {
            white-space: nowrap;
        }

        li button .text-right {
            display: block;
        }

        li button:hover:enabled .text-right {
            color: rgb(255, 255, 255);
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
            fill: rgb(255, 255, 255);
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
        class="dropdown {hasArrows ? 'has-dropdown-arrow' : ''}" 
        style="
            top: {$menusState[_id].remTop}; 
            left: {$menusState[_id].remLeft}; 
            width: {$menusState[_id].remWidth}"
        out:fade="{{ delay: 0, duration: 100 }}"
    >
        {#if hasArrows}
            <div class="dropdown-arrow {hasLabels ? 'has-button-labels' : ''}"></div>
        {/if}
        <div class="dropdown-pane {hasLabels ? 'has-button-labels' : ''}" style="width: {$menusState[_id].paneRemWidth}; max-height: {$menusState[_id].paneRemMaxHeight}; left: {$menusState[_id].paneRemLeft}; right: {$menusState[_id].paneRemRight}">
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