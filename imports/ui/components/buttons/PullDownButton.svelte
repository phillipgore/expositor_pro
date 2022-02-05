<script>
    import {Random} from 'meteor/random'
    import {settingsState} from '../../../stores/settingsStore.js';
    import {buttonsSetup, buttonsState} from '../../../stores/buttonsStore.js';
    import {menusSetup, menusState} from '../../../stores/menusStore.js';
    import {getIcon} from '../../../stores/iconsStore.js';
    import PullDownMenu from "./PullDownMenu.svelte";

    export let _id;

    let randomId = Random.id();
    let buttonStateId = `${_id}-${randomId}`;
    let buttonSetup = $buttonsSetup.find(button => button._id === _id);

    let menuId = buttonSetup.menuId;
    let menuStateId = `${menuId}-${randomId}`;
    let menuSetup = $menusSetup.find(menu => menu._id === menuId);

    let hasLabels = $settingsState.toolbarButtons.hasLabels;
    let hasArrows = $settingsState.pullDownMenus.hasArrows;

    let windowHeight;
    let windowWidth;

    $buttonsState[buttonStateId] = {isActive: buttonSetup.isActive};

    const pullDownButtonClick = (event) => {
        pullDownButtonPosition(event);
        pullDownButtonsReset(buttonStateId, menuStateId);
        $buttonsState[buttonStateId].isActive = !$buttonsState[buttonStateId].isActive;
        $menusState[menuStateId].isActive = !$menusState[menuStateId].isActive;
    };

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

        pullDownMenuPosition.remLeft = `${($buttonsState[buttonStateId].intOffsetLeft) / $settingsState.baseFontSize}rem`;
        pullDownMenuPosition.remWidth = `${($buttonsState[buttonStateId].intWidth) / $settingsState.baseFontSize}rem`;
        pullDownMenuPosition.paneRemMaxHeight = `${(windowHeight - ($buttonsState[buttonStateId].intHeight + $buttonsState[buttonStateId].intOffsetTop) - 23) / $settingsState.baseFontSize}rem`;
        
        if (hasArrows) {
            pullDownMenuPosition.remTop = `${($buttonsState[buttonStateId].intOffsetTop + $buttonsState[buttonStateId].intHeight - 5)  / $settingsState.baseFontSize}rem`;
        } else {
            pullDownMenuPosition.remTop = `${($buttonsState[buttonStateId].intOffsetTop + $buttonsState[buttonStateId].intHeight + 2)  / $settingsState.baseFontSize}rem`;
        }

        if ((menuSetup.paneIntWidth - $buttonsState[buttonStateId].intWidth)  / 2 > $buttonsState[buttonStateId].intOffsetLeft) {
            pullDownMenuPosition.paneRemLeft = `${0 - (($buttonsState[buttonStateId].intOffsetLeft - $settingsState.baseFontSize) / $settingsState.baseFontSize)}rem`;
        }

        if ($buttonsState[buttonStateId].intOffsetLeft + ((menuSetup.paneIntWidth + $buttonsState[buttonStateId].intWidth)  / 2) > windowWidth) {
            pullDownMenuPosition.paneRemRight = `${0 - ((windowWidth - $buttonsState[buttonStateId].intOffsetRight - $settingsState.baseFontSize) / $settingsState.baseFontSize)}rem`;
        }
        $menusState[menuStateId] = {...$menusState[menuStateId], ...pullDownMenuPosition};
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
</script>

<style>
    .btn-container {
        display: inline-block;
    }

    .btn-wrapper {
        display: flex;
        flex-direction: column;
        position: relative;
        margin: 0.0rem 0.3rem;
    }

    button {
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.3rem;
        height: 2.4rem;
        width: 4.8rem; 
        margin:  0rem auto;
        border: 0.1rem solid var(--gray-200);
        background-color: var(--gray-400);
        outline: 0;
    }

    button:active,
    button.active {
        background-color: var(--gray-600);
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
        fill: var(--gray-800);
    }

    .caret-down {
        width: 0.7rem;
        margin-left: 0.3rem;
        fill: var(--gray-800);
    }

    .btn-label {
        font-size: 1.1rem;
        color: var(--gray-800);
    }

    .btn-under-label {
        text-align: center;
        font-size: 1.1rem;
        letter-spacing: 0.04rem;
        color: var(--gray-800);
        cursor: default;
        padding: 0.0rem 0.3rem;
        z-index: 10;
        display: block;
        fill: var(--gray-800);
        margin-top:  0.4rem;
    }
</style>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} on:resize={pullDownButtonPosition} on:click={evaluateClick}/>

<div class="btn-container">
    <div class="btn-wrapper {hasLabels ? '' : 'btn-no-under-label'}">
        <button id="{buttonSetup._id}" class="js-pull-down-button {$buttonsState[buttonStateId].isActive ? 'active' : ''}" on:click|capture={pullDownButtonClick}>
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
    </div>
</div>

<PullDownMenu _id={buttonSetup.menuId} menuStateId={menuStateId}/>