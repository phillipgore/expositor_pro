<script>
	import { createEventDispatcher } from 'svelte';
    import {Random} from 'meteor/random';

    import {getIcon} from '../../stores/icons.js';
    import {buttonState, menuState, sheetState} from '../../stores/store.js';

    let _id = Random.id();

    export let classes = undefined;
    export let color = 'system-blue';
    export let groupId = undefined;
    export let hasCaret = false;
    export let icon = undefined;
    export let iconActive = undefined;
    export let iconColor = undefined;
    export let iconStrokeColor = undefined;
    export let isActive = false;
    export let isDisabled = false;
    export let isFullWidth = false;
    export let isMultiSelect = false;
    export let isToggle = false;
    export let label = undefined;
    export let labelActive = undefined;
    export let labelIsLeft = false;
    export let menuId = undefined;
    export let sheetId = undefined;
    export let shortcut = undefined;

    let button;
    let windowWidth;
    let windowHeight;

    const dispatch = createEventDispatcher();

    /* ---------- Basic Functions ---------- */
    $buttonState[_id]  = {
        _id: _id,
        groupId: groupId,
        isActive: isActive,
        labelActive: labelActive,
        label: label,
        menuId: menuId,
        sheetId: sheetId
    }; 

    const buttonClick = () => {
        dispatch('buttonClick');
        
        if (menuId) {
            menuToggle();
        }
        if (sheetId) {
            $sheetState[sheetId].isActive = !$sheetState[sheetId].isActive;
        }
        if (isToggle) {
            $buttonState[_id].isActive = !$buttonState[_id].isActive;
        }
        if (groupId) {
            Object.keys($buttonState).forEach(key => {
                if ($buttonState[key].groupId === $buttonState[_id].groupId) {
                    $buttonState[key].isActive = false;
                }
            });
            $buttonState[_id].isActive = !$buttonState[_id].isActive;
        }
    }

    const evaluateClick = (event) => {
        if (!event.target.dataset.menuId && event.target.dataset.isMultiSelect === "false" || !event.target.dataset.isMultiSelect) {
            menuReset(undefined, undefined)
        }
    }


    /* ---------- Menu Functions ---------- */
    const menuToggle = () => {
        let buttonPosition = button.getBoundingClientRect();
        let menuHeight = Math.ceil(buttonPosition.top)  + Math.ceil(buttonPosition.height) + 3;
        let menuLeft = Math.ceil(buttonPosition.left);

        menuPosition(menuHeight, menuLeft, windowWidth);
        menuReset(_id, $buttonState[_id].menuId);

        $buttonState[_id].isActive = !$buttonState[_id].isActive;
        $menuState[menuId].isActive = !$menuState[menuId].isActive;
    };

    const menuPosition = (menuTop, menuLeft, windowWidth) => {
        if ($buttonState[_id].isActive) {
            menuReset(_id, undefined);
        } else {
            Object.keys($menuState).forEach(key => {
                $menuState[key].menuTop = 0;
                $menuState[key].menuLeft = -100000
                $menuState[key].isActive = false;
            });

            if (menuLeft + $menuState[menuId].menuWidth > windowWidth) {
                menuLeft = menuLeft - (menuLeft + $menuState[menuId].menuWidth - windowWidth) - 12;
            }

            $menuState[menuId].menuTop = menuTop;
            $menuState[menuId].menuLeft = menuLeft
            $menuState[menuId].isActive = true;
        }
    }

    const menuReset = (buttonId, menuId) => {
        Object.keys($buttonState).forEach(key => {
            if (key != buttonId && $buttonState[key].menuId) {
                $buttonState[key].isActive = false;
            }
        });

        Object.keys($menuState).forEach(key => {
            if (key != menuId) {
                $menuState[key].menuTop = 0;
                $menuState[key].menuLeft = -100000
                $menuState[key].isActive = false;
            }
        });
    };
</script>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} on:resize={() => menuReset(undefined, undefined)} on:click={(evaluateClick)}/>

<button 
    id={_id}
    class="{classes? classes: ''} {color? color: ''} {$buttonState[_id].isActive? 'active' : ''} {groupId? 'grouped': ''} {isFullWidth? 'full-width': ''} {labelIsLeft? 'justify-content-left': ''}" 
    disabled={isDisabled}
    bind:this={button}
    on:click={buttonClick}
    data-is-multi-select={isMultiSelect}
    data-menu-id={menuId}
    data-sheet-id={sheetId}
    data-group-id={groupId}
>
    {#if icon}
        <div class="icon-container {label? 'has-label': ''}">
            {#if $buttonState[_id].isActive && iconActive}
                <svg class="icon {iconColor? `icon-fill-${iconColor}`: ''} {iconStrokeColor? `icon-stroke-${iconStrokeColor}`: ''}" viewBox="{getIcon(iconActive).viewBox}">
                    <path d={getIcon(iconActive).d}/>
                </svg>
            {:else if icon != 'blank'}
                <svg class="icon {iconColor? `icon-fill-${iconColor}`: ''} {iconStrokeColor? `icon-stroke-${iconStrokeColor}`: ''}" viewBox="{getIcon(icon).viewBox}">
                    <path d={getIcon(icon).d}/>
                </svg>
            {/if}
        </div>
    {/if}

    {#if $buttonState[_id].label}
        <span class="button-label">{$buttonState[_id].labelActive && $buttonState[_id].isActive? $buttonState[_id].labelActive : $buttonState[_id].label}</span>
    {/if}

    {#if hasCaret}
        <svg class="caret-down" viewBox="{getIcon('caret-down').viewBox}">
            <path d={getIcon('caret-down').d}/>
        </svg>
    {/if}

    {#if shortcut}
        <div class="shortcut">{@html shortcut}</div>
    {/if}
</button>

<style>
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.3rem;
        height: 2.4rem;
        min-width: 4.8rem; 
        padding: 0rem 0.6rem;
        margin:  0rem 0.3rem;
        border: none;
        outline: 0;
    }

    button.justify-content-left {
        justify-content: left;
    }

    button.full-width {
        width: 100%;
    }
    
    .icon-container {
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: none;
    }

    .icon-container.has-label {
        height: 1.4rem;
        width: 1.4rem;
        margin-right: 0.6rem;
    }
    
    .icon {
        height: 1.4rem;
        max-width: 1.6rem;
        margin: 0.0rem;
        pointer-events: none;
    }

    .icon.has-label {
        margin-right: 0.6rem;
    }

    .caret-down {
        width: 0.7rem;
        margin-left: 0.3rem;
        pointer-events: none;
    }

    .button-label {
        white-space: nowrap;
        font-size: 1.2rem;
        font-weight: 500;
        pointer-events: none;
    }

    .shortcut {
        color: var(--gray-500);
        text-align: right;
        margin-left: 1.8rem;
        flex-grow: 1;
    }

    button:enabled .icon-stroke-red { stroke: var(--red); stroke-width: 0.1rem; }
    button:enabled .icon-stroke-orange { stroke: var(--orange); stroke-width: 0.1rem; }
    button:enabled .icon-stroke-yellow { stroke: var(--yellow); stroke-width: 0.1rem; }
    button:enabled .icon-stroke-green { stroke: var(--green); stroke-width: 0.1rem; }
    button:enabled .icon-stroke-aqua { stroke: var(--aqua); stroke-width: 0.1rem; }
    button:enabled .icon-stroke-blue { stroke: var(--blue); stroke-width: 0.1rem; }
    button:enabled .icon-stroke-purple { stroke: var(--purple); stroke-width: 0.1rem; }
    button:enabled .icon-stroke-pink { stroke: var(--pink); stroke-width: 0.1rem; }

    button:disabled .icon-stroke-red,
    button:disabled .icon-stroke-orange,
    button:disabled .icon-stroke-yellow,
    button:disabled .icon-stroke-green,
    button:disabled .icon-stroke-aqua,
    button:disabled .icon-stroke-blue,
    button:disabled .icon-stroke-purple,
    button:disabled .icon-stroke-pink { stroke: var(--gray-700); stroke-width: 0.1rem; }

    button:enabled .icon-fill-red { fill: var(--red-light); }
    button:enabled .icon-fill-orange { fill: var(--orange-light); }
    button:enabled .icon-fill-yellow { fill: var(--yellow-light); }
    button:enabled .icon-fill-green { fill: var(--green-light); }
    button:enabled .icon-fill-aqua { fill: var(--aqua-light); }
    button:enabled .icon-fill-blue { fill: var(--blue-light); }
    button:enabled .icon-fill-purple { fill: var(--purple-light); }
    button:enabled .icon-fill-pink { fill: var(--pink-light); }

    button:disabled .icon-fill-red,
    button:disabled .icon-fill-orange,
    button:disabled .icon-fill-yellow,
    button:disabled .icon-fill-green,
    button:disabled .icon-fill-aqua,
    button:disabled .icon-fill-blue,
    button:disabled .icon-fill-purple,
    button:disabled .icon-fill-pink { fill: var(--gray-700); }





    /* --- Color Options --- */
    /* .system-toolbar styles */
    button.system-toolbar {
        border: 0.1rem solid;
        border-color: var(--gray-200);
        background-color: var(--gray-400);
        margin: 0rem 0.2rem;
    }

    button.segment.system-toolbar {
        margin: 0rem 0.0rem;
    }

    button.system-toolbar:active:enabled,
    button.system-toolbar.active:enabled {
        background-color: var(--gray-800);
    }

    .system-toolbar .icon,
    .system-toolbar .caret-down,
    .system-toolbar .button-label,
    .system-toolbar .shortcut {
        fill: var(--white);
        color: var(--white);
    }

    button.system-toolbar:active:enabled .icon,
    button.system-toolbar.active:enabled .icon,
    button.system-toolbar:active:enabled .caret-down,
    button.system-toolbar.active:enabled .caret-down,
    button.system-toolbar:active:enabled .button-label,
    button.system-toolbar.active:enabled .button-label {
        fill: var(--gray-200);
        color: var(--gray-200);
    }



    /* .system-menu styles */
    button.system-menu,
    button.system-menu:hover:enabled {
        color: var(--black);
        background: transparent;
        border: none;
        text-decoration: none;
        height: 2.6rem;
        margin: 0.0rem;
    }

    button.system-menu:hover:enabled .icon {
        fill: var(--white);
    }

    button.system-menu:hover:enabled {
        color: var(--white);
        background-color: var(--system-blue);
    }

    button.system-menu:hover:enabled .shortcut {
        color: var(--white);
    }



    /* .system-blue styles */
    button.system-blue {
        border-color: var(--system-blue);
        background-color: var(--system-blue);
    }

    button.system-blue:active:enabled,
    button.system-blue.active:enabled {
        background-color: var(--system-blue-dark);
    }

    .system-blue .icon,
    .system-blue .caret-down,
    .system-blue .button-label,
    .system-blue .shortcut {
        fill: var(--white);
        color: var(--white);
    }



    /* .system-gray styles */
    button.system-gray {
        border-color: var(--system-gray);
        background-color: var(--system-gray);
    }

    button.system-gray:active:enabled,
    button.system-gray.active:enabled {
        background-color: var(--system-gray-dark);
    }

    .system-gray .icon,
    .system-gray .caret-down,
    .system-gray .button-label,
    .system-gray .shortcut {
        fill: var(--white);
        color: var(--white);
    }



    /* .system-red styles */
    button.system-red {
        border-color: var(--system-red);
        background-color: var(--system-red);
    }

    button.system-red:active:enabled,
    button.system-red.active:enabled {
        background-color: var(--system-red-dark);
    }

    .system-red .icon,
    .system-red .caret-down,
    .system-red .button-label,
    .system-red .shortcut {
        fill: var(--white);
        color: var(--white);
    }
    


    /* .gray styles */
    button.gray {
        border-color: var(--gray);
        background-color: var(--gray-light);
    }

    button.gray:active:enabled,
    button.gray.active:enabled {
        border-color: var(--gray);
        background-color: var(--gray);
    }

    .gray .icon,
    .gray .caret-down,
    .gray .button-label,
    .gray .shortcut {
        fill: var(--gray-dark);
        color: var(--gray-dark);
    }

    button.gray:active:enabled .icon,
    button.gray.active:enabled .icon,
    button.gray:active:enabled .button-label,
    button.gray.active:enabled .button-label,
    button.gray:active:enabled .shortcut,
    button.gray.active:enabled .shortcut {
        fill: var(--white);
        color: var(--white);
    }
    


    /* .red styles */
    button.red {
        border-color: var(--red);
        background-color: var(--red-light);
    }

    button.red:active:enabled,
    button.red.active:enabled {
        border-color: var(--red);
        background-color: var(--red);
    }

    .red .icon,
    .red .caret-down,
    .red .button-label,
    .red .shortcut {
        fill: var(--red-dark);
        color: var(--red-dark);
    }

    button.red:active:enabled .icon,
    button.red.active:enabled .icon,
    button.red:active:enabled .caret-down,
    button.red.active:enabled .caret-down,
    button.red:active:enabled .button-label,
    button.red.active:enabled .button-label,
    button.red:active:enabled .shortcut,
    button.red.active:enabled .shortcut {
        fill: var(--white);
        color: var(--white);
    }
    


    /* .orange styles */
    button.orange {
        border-color: var(--orange);
        background-color: var(--orange-light);
    }

    button.orange:active:enabled,
    button.orange.active:enabled {
        border-color: var(--orange);
        background-color: var(--orange);
    }

    .orange .icon,
    .orange .caret-down,
    .orange .button-label,
    .orange .shortcut {
        fill: var(--orange-dark);
        color: var(--orange-dark);
    }

    button.orange:active:enabled .icon,
    button.orange.active:enabled .icon,
    button.orange:active:enabled .caret-down,
    button.orange.active:enabled .caret-down,
    button.orange:active:enabled .button-label,
    button.orange.active:enabled .button-label,
    button.orange:active:enabled .shortcut,
    button.orange.active:enabled .shortcut {
        fill: var(--white);
        color: var(--white);
    }
    


    /* .yellow styles */
    button.yellow {
        border-color: var(--yellow);
        background-color: var(--yellow-light);
    }

    button.yellow:active:enabled,
    button.yellow.active:enabled {
        border-color: var(--yellow);
        background-color: var(--yellow);
    }

    .yellow .icon,
    .yellow .caret-down,
    .yellow .button-label,
    .yellow .shortcut {
        fill: var(--yellow-dark);
        color: var(--yellow-dark);
    }

    button.yellow:active:enabled .icon,
    button.yellow.active:enabled .icon,
    button.yellow:active:enabled .caret-down,
    button.yellow.active:enabled .caret-down,
    button.yellow:active:enabled .button-label,
    button.yellow.active:enabled .button-label,
    button.yellow:active:enabled .shortcut,
    button.yellow.active:enabled .shortcut {
        fill: var(--white);
        color: var(--white);
    }
    


    /* .green styles */
    button.green {
        border-color: var(--green);
        background-color: var(--green-light);
    }

    button.green:active:enabled,
    button.green.active:enabled {
        border-color: var(--green);
        background-color: var(--green);
    }

    .green .icon,
    .green .caret-down,
    .green .button-label,
    .green .shortcut {
        fill: var(--green-dark);
        color: var(--green-dark);
    }

    button.green:active:enabled .icon,
    button.green.active:enabled .icon,
    button.green:active:enabled .caret-down,
    button.green.active:enabled .caret-down,
    button.green:active:enabled .button-label,
    button.green.active:enabled .button-label,
    button.green:active:enabled .shortcut,
    button.green.active:enabled .shortcut {
        fill: var(--white);
        color: var(--white);
    }
    


    /* .aqua styles */
    button.aqua {
        border-color: var(--aqua);
        background-color: var(--aqua-light);
    }

    button.aqua:active:enabled,
    button.aqua.active:enabled {
        border-color: var(--aqua);
        background-color: var(--aqua);
    }

    .aqua .icon,
    .aqua .caret-down,
    .aqua .button-label,
    .aqua .shortcut {
        fill: var(--aqua-dark);
        color: var(--aqua-dark);
    }

    button.aqua:active:enabled .icon,
    button.aqua.active:enabled .icon,
    button.aqua:active:enabled .caret-down,
    button.aqua.active:enabled .caret-down,
    button.aqua:active:enabled .button-label,
    button.aqua.active:enabled .button-label,
    button.aqua:active:enabled .shortcut,
    button.aqua.active:enabled .shortcut {
        fill: var(--white);
        color: var(--white);
    }
    


    /* .blue styles */
    button.blue {
        border-color: var(--blue);
        background-color: var(--blue-light);
    }

    button.blue:active:enabled,
    button.blue.active:enabled {
        border-color: var(--blue);
        background-color: var(--blue);
    }

    .blue .icon,
    .blue .caret-down,
    .blue .button-label,
    .blue .shortcut {
        fill: var(--blue-dark);
        color: var(--blue-dark);
    }

    button.blue:active:enabled .icon,
    button.blue.active:enabled .icon,
    button.blue:active:enabled .caret-down,
    button.blue.active:enabled .caret-down,
    button.blue:active:enabled .button-label,
    button.blue.active:enabled .button-label,
    button.blue:active:enabled .shortcut,
    button.blue.active:enabled .shortcut {
        fill: var(--white);
        color: var(--white);
    }
    


    /* .purple styles */
    button.purple {
        border-color: var(--purple);
        background-color: var(--purple-light);
    }

    button.purple:active:enabled,
    button.purple.active:enabled {
        border-color: var(--purple);
        background-color: var(--purple);
    }

    .purple .icon,
    .purple .caret-down,
    .purple .button-label,
    .purple .shortcut {
        fill: var(--purple-dark);
        color: var(--purple-dark);
    }

    button.purple:active:enabled .icon,
    button.purple.active:enabled .icon,
    button.purple:active:enabled .caret-down,
    button.purple.active:enabled .caret-down,
    button.purple:active:enabled .button-label,
    button.purple.active:enabled .button-label,
    button.purple:active:enabled .shortcut,
    button.purple.active:enabled .shortcut {
        fill: var(--white);
        color: var(--white);
    }
    


    /* .pink styles */
    button.pink {
        border-color: var(--pink);
        background-color: var(--pink-light);
    }

    button.pink:active:enabled,
    button.pink.active:enabled {
        border-color: var(--pink);
        background-color: var(--pink);
    }

    .pink .icon,
    .pink .caret-down,
    .pink .button-label,
    .pink .shortcut {
        fill: var(--pink-dark);
        color: var(--pink-dark);
    }

    button.pink:active:enabled .icon,
    button.pink.active:enabled .icon,
    button.pink:active:enabled .caret-down,
    button.pink.active:enabled .caret-down,
    button.pink:active:enabled .button-label,
    button.pink.active:enabled .button-label,
    button.pink:active:enabled .shortcut,
    button.pink.active:enabled .shortcut {
        fill: var(--white);
        color: var(--white);
    }
    


    /* disabled styles */
    button:disabled,
    button.disabled {
        opacity: 0.55;
    }

    button:disabled .icon,
    button:disabled .caret-down,
    button:disabled .button-label,
    button.disabled .icon,
    button.disabled .caret-down,
    button.disabled .button-label,
    button.disabled .shortcut {
        opacity: 0.75;
    }
</style>