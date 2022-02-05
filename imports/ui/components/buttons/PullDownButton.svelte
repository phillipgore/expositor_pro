<script>
    import {Random} from 'meteor/random'
    import {settingsState} from '../../../stores/settingsStore.js';
    import {buttonsSetup, buttonsState} from '../../../stores/buttonsStore.js';
    import {menusSetup, menusState} from '../../../stores/menusStore.js';
    import {getIcon} from '../../../stores/iconsStore.js';
    import PullDownMenu from "./PullDownMenu.svelte";

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
        let isNotPullDownButton = ![
			event.target.classList ? event.target.classList.contains('js-pull-down-button') : false, 
			event.target.parentNode && event.target.parentNode.classList ? event.target.parentNode.classList.contains('js-pull-down-button') : false, 
			event.target.parentNode && event.target.parentNode.parentNode && event.target.parentNode.parentNode.classList ? event.target.parentNode.parentNode.classList.contains('js-pull-down-button') : false,
		].includes(true);

        if (isNotPullDownButton) {
            pullDownButtonsReset(undefined, undefined)
        }
    }

    const pullDownButtonPosition = (event) => {
        let pullDownButtonRect = event.currentTarget.getBoundingClientRect();
        let pullDownButtonPosition = {
            intOffsetTop:  Math.ceil(pullDownButtonRect.top),
            intOffsetRight:  Math.ceil(pullDownButtonRect.right),
            intOffsetLeft:  Math.ceil(pullDownButtonRect.left),
            intHeight:  Math.ceil(pullDownButtonRect.height),
            intWidth:  Math.ceil(pullDownButtonRect.width),
        }
        $buttonsState[buttonStateId] = {...$buttonsState[buttonStateId], ...pullDownButtonPosition};
        
        let pullDownMenuPosition = {}
        pullDownMenuPosition.paneRemTop = `${($buttonsState[buttonStateId].intHeight + 2) / $settingsState.baseFontSize}rem`;
        if ($buttonsState[buttonStateId].intOffsetLeft + menuSetup.paneIntWidth > windowWidth) {
            pullDownMenuPosition.paneRemRight = `${0 - ((windowWidth - $buttonsState[buttonStateId].intOffsetRight - 9) / $settingsState.baseFontSize)}rem`;
        }
        pullDownMenuPosition.paneRemMaxHeight = `${(windowHeight - ($buttonsState[buttonStateId].intHeight + $buttonsState[buttonStateId].intOffsetTop) - 23) / $settingsState.baseFontSize}rem`;

        $menusState[menuStateId] = {...$menusState[menuStateId], ...pullDownMenuPosition};
    };
</script>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} on:resize={pullDownButtonPosition} on:click={evaluateClick}/>

<div class="btn-container {color}">
    <div class="btn-wrapper {hasLabels ? '' : 'btn-no-under-label'}">
        <button id="{buttonStateId}" class="js-pull-down-button {$buttonsState[buttonStateId].isActive ? 'active' : ''}" on:click|capture={pullDownButtonClick} aria-label="{buttonSetup.underLabel}">
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



    /* .toolbar styles */
    .toolbar button {
        border-color: var(--gray-200);
        background-color: var(--gray-400);
    }

    .toolbar button:active,
    .toolbar button.active {
        background-color: var(--gray-800);
    }

    .toolbar .icon,
    .toolbar .caret-down,
    .toolbar .btn-label {
        fill: var(--white);
        color: var(--white);
    }

    .toolbar button:active .icon,
    .toolbar button.active .icon,
    .toolbar button:active .caret-down,
    .toolbar button.active .caret-down,
    .toolbar button:active .btn-label,
    .toolbar button.active .btn-label {
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

    .gray button:active,
    .gray button.active {
        border-color: var(--gray);
        background-color: var(--gray);
    }

    .gray .icon,
    .gray .caret-down,
    .gray .btn-label {
        fill: var(--gray-dark);
        color: var(--gray-dark);
    }

    .gray button:active .icon,
    .gray button.active .icon,
    .gray button:active .caret-down,
    .gray button.active .caret-down,
    .gray button:active .btn-label,
    .gray button.active .btn-label {
        fill: var(--white);
        color: var(--white);
    }



    /* .red styles */
    .red button {
        border-color: var(--red);
        background-color: var(--red-light);
    }

    .red button:active,
    .red button.active {
        border-color: var(--red);
        background-color: var(--red);
    }

    .red .icon,
    .red .caret-down,
    .red .btn-label {
        fill: var(--red-dark);
        color: var(--red-dark);
    }

    .red button:active .icon,
    .red button.active .icon,
    .red button:active .caret-down,
    .red button.active .caret-down,
    .red button:active .btn-label,
    .red button.active .btn-label {
        fill: var(--white);
        color: var(--white);
    }



    /* .orange styles */
    .orange button {
        border-color: var(--orange);
        background-color: var(--orange-light);
    }

    .orange button:active,
    .orange button.active {
        border-color: var(--orange);
        background-color: var(--orange);
    }

    .orange .icon,
    .orange .caret-down,
    .orange .btn-label {
        fill: var(--orange-dark);
        color: var(--orange-dark);
    }

    .orange button:active .icon,
    .orange button.active .icon,
    .orange button:active .caret-down,
    .orange button.active .caret-down,
    .orange button:active .btn-label,
    .orange button.active .btn-label {
        fill: var(--white);
        color: var(--white);
    }



    /* .yellow styles */
    .yellow button {
        border-color: var(--yellow);
        background-color: var(--yellow-light);
    }

    .yellow button:active,
    .yellow button.active {
        border-color: var(--yellow);
        background-color: var(--yellow);
    }

    .yellow .icon,
    .yellow .caret-down,
    .yellow .btn-label {
        fill: var(--yellow-dark);
        color: var(--yellow-dark);
    }

    .yellow button:active .icon,
    .yellow button.active .icon,
    .yellow button:active .caret-down,
    .yellow button.active .caret-down,
    .yellow button:active .btn-label,
    .yellow button.active .btn-label {
        fill: var(--white);
        color: var(--white);
    }



    /* .green styles */
    .green button {
        border-color: var(--green);
        background-color: var(--green-light);
    }

    .green button:active,
    .green button.active {
        border-color: var(--green);
        background-color: var(--green);
    }

    .green .icon,
    .green .caret-down,
    .green .btn-label {
        fill: var(--green-dark);
        color: var(--green-dark);
    }

    .green button:active .icon,
    .green button.active .icon,
    .green button:active .caret-down,
    .green button.active .caret-down,
    .green button:active .btn-label,
    .green button.active .btn-label {
        fill: var(--white);
        color: var(--white);
    }



    /* .aqua styles */
    .aqua button {
        border-color: var(--aqua);
        background-color: var(--aqua-light);
    }

    .aqua button:active,
    .aqua button.active {
        border-color: var(--aqua);
        background-color: var(--aqua);
    }

    .aqua .icon,
    .aqua .caret-down,
    .aqua .btn-label {
        fill: var(--aqua-dark);
        color: var(--aqua-dark);
    }

    .aqua button:active .icon,
    .aqua button.active .icon,
    .aqua button:active .caret-down,
    .aqua button.active .caret-down,
    .aqua button:active .btn-label,
    .aqua button.active .btn-label {
        fill: var(--white);
        color: var(--white);
    }



    /* .blue styles */
    .blue button {
        border-color: var(--blue);
        background-color: var(--blue-light);
    }

    .blue button:active,
    .blue button.active {
        border-color: var(--blue);
        background-color: var(--blue);
    }

    .blue .icon,
    .blue .caret-down,
    .blue .btn-label {
        fill: var(--blue-dark);
        color: var(--blue-dark);
    }

    .blue button:active .icon,
    .blue button.active .icon,
    .blue button:active .caret-down,
    .blue button.active .caret-down,
    .blue button:active .btn-label,
    .blue button.active .btn-label {
        fill: var(--white);
        color: var(--white);
    }



    /* .purple styles */
    .purple button {
        border-color: var(--purple);
        background-color: var(--purple-light);
    }

    .purple button:active,
    .purple button.active {
        border-color: var(--purple);
        background-color: var(--purple);
    }

    .purple .icon,
    .purple .caret-down,
    .purple .btn-label {
        fill: var(--purple-dark);
        color: var(--purple-dark);
    }

    .purple button:active .icon,
    .purple button.active .icon,
    .purple button:active .caret-down,
    .purple button.active .caret-down,
    .purple button:active .btn-label,
    .purple button.active .btn-label {
        fill: var(--white);
        color: var(--white);
    }



    /* .pink styles */
    .pink button {
        border-color: var(--pink);
        background-color: var(--pink-light);
    }

    .pink button:active,
    .pink button.active {
        border-color: var(--pink);
        background-color: var(--pink);
    }

    .pink .icon,
    .pink .caret-down,
    .pink .btn-label {
        fill: var(--pink-dark);
        color: var(--pink-dark);
    }

    .pink button:active .icon,
    .pink button.active .icon,
    .pink button:active .caret-down,
    .pink button.active .caret-down,
    .pink button:active .btn-label,
    .pink button.active .btn-label {
        fill: var(--white);
        color: var(--white);
    }
</style>