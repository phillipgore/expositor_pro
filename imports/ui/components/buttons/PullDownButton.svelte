<script>
    import {Random} from 'meteor/random';

    import {settingsState} from '../../../stores/settingsStore.js';
    import {buttonsSetup, buttonsState} from '../../../stores/buttonsStore.js';
    import {menusSetup, menusState} from '../../../stores/menusStore.js';
    import {getIcon} from '../../../stores/iconsStore.js';

    import PullDownMenu from "../menus/PullDownMenu.svelte";

    export let _id;
    export let color = 'gray';
    export let hasLabels = false;

    let randomId = Random.id();
    let buttonStateId = `${_id}-${randomId}`;
    let buttonSetup = $buttonsSetup.find(button => button._id === _id);

    let menuId = buttonSetup.menuId;
    let menuStateId = `${menuId}-${randomId}`;
    let menuSetup = $menusSetup.find(menu => menu._id === menuId);

    let windowHeight;
    let windowWidth;

    $buttonsState[buttonStateId] = {isActive: buttonSetup.isActive};

    const pullDownButtonClick = (event) => {
        pullDownButtonPosition(event);
        pullDownButtonsReset(buttonStateId, menuStateId);
        $buttonsState[buttonStateId].isActive = !$buttonsState[buttonStateId].isActive;
        $menusState[menuStateId].isActive = !$menusState[menuStateId].isActive;
    };

    const pullDownButtonsReset = (buttonStateId, menuStateId) => {
        Object.keys($buttonsState).forEach(key => {
            if (key != buttonStateId) {
                $buttonsState[key].isActive = false;
            }
        });

        Object.keys($menusState).forEach(key => {
            if (key != menuStateId) {
                $menusState[key].isActive = false;
            }
        });
    };

    const evaluateClick = (event) => {
        let target = event.target;
        let isNotPullDownButton = ![
			target.classList ? target.classList.contains('js-pull-down-button') : false, 
			target.parentNode && target.parentNode.classList ? target.parentNode.classList.contains('js-pull-down-button') : false, 
			target.parentNode && target.parentNode.parentNode && target.parentNode.parentNode.classList ? target.parentNode.parentNode.classList.contains('js-pull-down-button') : false,
		].includes(true);

        if (isNotPullDownButton) {
            pullDownButtonsReset(undefined, undefined)
        }
    }

    const pullDownButtonPosition = () => {
        let buttonRect = document.getElementById(buttonStateId).getBoundingClientRect();

        let buttonTop = Math.ceil(buttonRect.top);
        let buttonRight = Math.ceil(buttonRect.right);
        let buttonLeft = Math.ceil(buttonRect.left);
        let buttonHeight = Math.ceil(buttonRect.height);
        
        let menuPosition = {}
        menuPosition.paneRemTop = `${(buttonHeight + 2) / $settingsState.baseFontSize}rem`;

        if (buttonLeft + menuSetup.paneIntWidth > windowWidth) {
            menuPosition.paneRemRight = `${0 - ((windowWidth - buttonRight - 9) / $settingsState.baseFontSize)}rem`;
        }
        menuPosition.paneRemMaxHeight = `${(windowHeight - (buttonHeight + buttonTop) - 23) / $settingsState.baseFontSize}rem`;

        $menusState[menuStateId] = {...$menusState[menuStateId], ...menuPosition};
    };
</script>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} on:resize={pullDownButtonPosition} on:click={evaluateClick}/>

<div class="btn-container {color}">
    <div class="btn-wrapper {hasLabels ? '' : 'btn-no-under-label'}">
        <button id="{buttonStateId}" class="js-pull-down-button {$buttonsState[buttonStateId].isActive ? 'active' : ''}" on:click|capture={pullDownButtonClick} aria-label="{buttonSetup.underLabel}" disabled="{buttonSetup.isDisabled}">
            {#if buttonSetup.iconName}
                <svg class="icon" viewBox="{getIcon(buttonSetup.iconName).viewBox}">
                    <path d={getIcon(buttonSetup.iconName).d}/>
                </svg>
            {:else if buttonSetup.label}
                <span class="btn-label">{buttonSetup.label}</span>
            {:else}
                <span class="btn-label">No Text</span>
            {/if}
            <svg class="caret-down" viewBox="{getIcon('caret-down').viewBox}">
                <path d={getIcon('caret-down').d}/>
            </svg>
        </button>
        {#if buttonSetup.underLabel}
            <div class="btn-under-label">{buttonSetup.underLabel}</div>
        {/if}
        <PullDownMenu _id={buttonSetup.menuId} menuStateId={menuStateId} color={color}/>
    </div>
</div>

<style>
    .btn-container {
        display: inline-block;
    }

    .btn-wrapper {
        display: flex;
        flex-direction: column;
        position: relative;
    }

    button {
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.3rem;
        height: 2.4rem;
        min-width: 4.8rem; 
        padding: 0rem 0.6rem;
        margin:  0rem auto;
        border: 0.1rem solid;
        outline: 0;
    }

    .btn-no-under-label button {
        height: 2.6rem;
    }

    .btn-no-under-label .btn-under-label {
        display: none;
    }

    .icon {
        height: 1.4rem;
        max-width: 1.6rem;
        margin: 0.0rem;
    }

    .caret-down {
        width: 0.7rem;
        margin-left: 0.3rem;
    }

    .btn-label {
        font-size: 1.2rem;
        font-weight: 500;
    }

    .btn-under-label {
        text-align: center;
        font-size: 1.1rem;
        letter-spacing: 0.04rem;
        color: var(--gray-300);
        cursor: default;
        padding: 0.0rem 0.3rem;
        z-index: 5;
        display: block;
        margin-top:  0.3rem;
        font-weight: 500;
    }



/* Color Options */
    /* .toolbar styles */
    .toolbar button {
        border-color: var(--gray-200);
        background-color: var(--gray-400);
    }

    .toolbar button:active:enabled,
    .toolbar button.active:enabled {
        background-color: var(--gray-800);
    }

    .toolbar .icon,
    .toolbar .caret-down,
    .toolbar .btn-label {
        fill: var(--white);
        color: var(--white);
    }

    .toolbar button:active:enabled .icon,
    .toolbar button.active:enabled .icon,
    .toolbar button:active:enabled .caret-down,
    .toolbar button.active:enabled .caret-down,
    .toolbar button:active:enabled .btn-label,
    .toolbar button.active:enabled .btn-label {
        fill: var(--gray-200);
        color: var(--gray-200);
    }

    .toolbar .btn-under-label {
        color: var(--gray-800);
        font-weight: normal;
    }
    
    /* .gray styles */
    .gray button {
        border-color: var(--gray);
        background-color: var(--gray-light);
    }

    .gray button:active:enabled,
    .gray button.active:enabled {
        border-color: var(--gray);
        background-color: var(--gray);
    }

    .gray .icon,
    .gray .caret-down,
    .gray .btn-label {
        fill: var(--gray-dark);
        color: var(--gray-dark);
    }

    .gray button:active:enabled .icon,
    .gray button.active:enabled .icon,
    .gray button:active:enabled .caret-down,
    .gray button.active:enabled .caret-down,
    .gray button:active:enabled .btn-label,
    .gray button.active:enabled .btn-label {
        fill: var(--white);
        color: var(--white);
    }
    
    /* .red styles */
    .red button {
        border-color: var(--red);
        background-color: var(--red-light);
    }

    .red button:active:enabled,
    .red button.active:enabled {
        border-color: var(--red);
        background-color: var(--red);
    }

    .red .icon,
    .red .caret-down,
    .red .btn-label {
        fill: var(--red-dark);
        color: var(--red-dark);
    }

    .red button:active:enabled .icon,
    .red button.active:enabled .icon,
    .red button:active:enabled .caret-down,
    .red button.active:enabled .caret-down,
    .red button:active:enabled .btn-label,
    .red button.active:enabled .btn-label {
        fill: var(--white);
        color: var(--white);
    }
    
    /* .orange styles */
    .orange button {
        border-color: var(--orange);
        background-color: var(--orange-light);
    }

    .orange button:active:enabled,
    .orange button.active:enabled {
        border-color: var(--orange);
        background-color: var(--orange);
    }

    .orange .icon,
    .orange .caret-down,
    .orange .btn-label {
        fill: var(--orange-dark);
        color: var(--orange-dark);
    }

    .orange button:active:enabled .icon,
    .orange button.active:enabled .icon,
    .orange button:active:enabled .caret-down,
    .orange button.active:enabled .caret-down,
    .orange button:active:enabled .btn-label,
    .orange button.active:enabled .btn-label {
        fill: var(--white);
        color: var(--white);
    }
    
    /* .yellow styles */
    .yellow button {
        border-color: var(--yellow);
        background-color: var(--yellow-light);
    }

    .yellow button:active:enabled,
    .yellow button.active:enabled {
        border-color: var(--yellow);
        background-color: var(--yellow);
    }

    .yellow .icon,
    .yellow .caret-down,
    .yellow .btn-label {
        fill: var(--yellow-dark);
        color: var(--yellow-dark);
    }

    .yellow button:active:enabled .icon,
    .yellow button.active:enabled .icon,
    .yellow button:active:enabled .caret-down,
    .yellow button.active:enabled .caret-down,
    .yellow button:active:enabled .btn-label,
    .yellow button.active:enabled .btn-label {
        fill: var(--white);
        color: var(--white);
    }
    
    /* .green styles */
    .green button {
        border-color: var(--green);
        background-color: var(--green-light);
    }

    .green button:active:enabled,
    .green button.active:enabled {
        border-color: var(--green);
        background-color: var(--green);
    }

    .green .icon,
    .green .caret-down,
    .green .btn-label {
        fill: var(--green-dark);
        color: var(--green-dark);
    }

    .green button:active:enabled .icon,
    .green button.active:enabled .icon,
    .green button:active:enabled .caret-down,
    .green button.active:enabled .caret-down,
    .green button:active:enabled .btn-label,
    .green button.active:enabled .btn-label {
        fill: var(--white);
        color: var(--white);
    }
    
    /* .aqua styles */
    .aqua button {
        border-color: var(--aqua);
        background-color: var(--aqua-light);
    }

    .aqua button:active:enabled,
    .aqua button.active:enabled {
        border-color: var(--aqua);
        background-color: var(--aqua);
    }

    .aqua .icon,
    .aqua .caret-down,
    .aqua .btn-label {
        fill: var(--aqua-dark);
        color: var(--aqua-dark);
    }

    .aqua button:active:enabled .icon,
    .aqua button.active:enabled .icon,
    .aqua button:active:enabled .caret-down,
    .aqua button.active:enabled .caret-down,
    .aqua button:active:enabled .btn-label,
    .aqua button.active:enabled .btn-label {
        fill: var(--white);
        color: var(--white);
    }
    
    /* .blue styles */
    .blue button {
        border-color: var(--blue);
        background-color: var(--blue-light);
    }

    .blue button:active:enabled,
    .blue button.active:enabled {
        border-color: var(--blue);
        background-color: var(--blue);
    }

    .blue .icon,
    .blue .caret-down,
    .blue .btn-label {
        fill: var(--blue-dark);
        color: var(--blue-dark);
    }

    .blue button:active:enabled .icon,
    .blue button.active:enabled .icon,
    .blue button:active:enabled .caret-down,
    .blue button.active:enabled .caret-down,
    .blue button:active:enabled .btn-label,
    .blue button.active:enabled .btn-label {
        fill: var(--white);
        color: var(--white);
    }
    
    /* .purple styles */
    .purple button {
        border-color: var(--purple);
        background-color: var(--purple-light);
    }

    .purple button:active:enabled,
    .purple button.active:enabled {
        border-color: var(--purple);
        background-color: var(--purple);
    }

    .purple .icon,
    .purple .caret-down,
    .purple .btn-label {
        fill: var(--purple-dark);
        color: var(--purple-dark);
    }

    .purple button:active:enabled .icon,
    .purple button.active:enabled .icon,
    .purple button:active:enabled .caret-down,
    .purple button.active:enabled .caret-down,
    .purple button:active:enabled .btn-label,
    .purple button.active:enabled .btn-label {
        fill: var(--white);
        color: var(--white);
    }
    
    /* .pink styles */
    .pink button {
        border-color: var(--pink);
        background-color: var(--pink-light);
    }

    .pink button:active:enabled,
    .pink button.active:enabled {
        border-color: var(--pink);
        background-color: var(--pink);
    }

    .pink .icon,
    .pink .caret-down,
    .pink .btn-label {
        fill: var(--pink-dark);
        color: var(--pink-dark);
    }

    .pink button:active:enabled .icon,
    .pink button.active:enabled .icon,
    .pink button:active:enabled .caret-down,
    .pink button.active:enabled .caret-down,
    .pink button:active:enabled .btn-label,
    .pink button.active:enabled .btn-label {
        fill: var(--white);
        color: var(--white);
    }
    



    button:disabled {
        opacity: 0.55;
    }

    button:disabled .icon,
    button:disabled .caret-down,
    button:disabled .btn-label {
        opacity: 0.75;
    }

    button:disabled + .btn-under-label {
        opacity: 0.65;
    }
</style>