<script>
    import {settingsState} from '../../modules/stores/settingsStore.js';
    import {pullDownButtonsSetup, pullDownButtonsState} from '../../modules/stores/pullDownButtonsStore.js';
    import {menusSetup, menusState} from '../../modules/stores/menusStore.js';
    import {getIcon} from '../../modules/stores/iconsStore.js';
    import PullDownMenu from "./PullDownMenu.svelte";

    export let _id = _id;
    export let toolbarId = toolbarId;

    let pullDownButtonSetup = $pullDownButtonsSetup.find(pullDownButton => pullDownButton._id === _id);
    let menuId = pullDownButtonSetup.menuId;
    let menuSetup = $menusSetup.find(menu => menu._id === menuId);
    let hasLabels = $settingsState.toolbarButtons.hasLabels;
    let hasArrows = $settingsState.pullDownMenus.hasArrows;
    let windowHeight;
    let windowWidth;

    $pullDownButtonsState[_id] = {isActive: pullDownButtonSetup.isActive};

    const pullDownButtonClick = () => {
        pullDownButtonPosition();
        pullDownButtonsReset(_id);
        $pullDownButtonsState[_id].isActive = !$pullDownButtonsState[_id].isActive;
        $menusState[menuId].isActive = !$menusState[menuId].isActive;
    };

    const pullDownButtonPosition = () => {
        let pullDownButtonRect = document.getElementById(_id).getBoundingClientRect();
        let pullDownButtonPosition = {
            intOffsetTop:  Math.ceil(pullDownButtonRect.top),
            intOffsetRight:  Math.ceil(pullDownButtonRect.right),
            intOffsetLeft:  Math.ceil(pullDownButtonRect.left),
            intHeight:  Math.ceil(pullDownButtonRect.height),
            intWidth:  Math.ceil(pullDownButtonRect.width),
        }
        $pullDownButtonsState[_id] = {...$pullDownButtonsState[_id], ...pullDownButtonPosition};
        
        let pullDownMenuPosition = {}

        pullDownMenuPosition.remLeft = `${($pullDownButtonsState[_id].intOffsetLeft) / 10}rem`;
        pullDownMenuPosition.remWidth = `${($pullDownButtonsState[_id].intWidth) / 10}rem`;
        pullDownMenuPosition.paneRemMaxHeight = `${(windowHeight - ($pullDownButtonsState[_id].intHeight + $pullDownButtonsState[_id].intOffsetTop) - 23) / 10}rem`;
        
        if (hasArrows) {
            pullDownMenuPosition.remTop = `${($pullDownButtonsState[_id].intOffsetTop + $pullDownButtonsState[_id].intHeight - 5)  / 10}rem`;
        } else {
            pullDownMenuPosition.remTop = `${($pullDownButtonsState[_id].intOffsetTop + $pullDownButtonsState[_id].intHeight + 2)  / 10}rem`;
        }

        if ((menuSetup.paneIntWidth - $pullDownButtonsState[_id].intWidth)  / 2 > $pullDownButtonsState[_id].intOffsetLeft) {
            pullDownMenuPosition.paneRemLeft = `${0 - (($pullDownButtonsState[_id].intOffsetLeft - 10) / 10)}rem`;
        }

        if ($pullDownButtonsState[_id].intOffsetLeft + ((menuSetup.paneIntWidth + $pullDownButtonsState[_id].intWidth)  / 2) > windowWidth) {
            pullDownMenuPosition.paneRemRight = `${0 - ((windowWidth - $pullDownButtonsState[_id].intOffsetRight - 10) / 10)}rem`;
        }
        $menusState[menuId] = {...$menusState[menuId], ...pullDownMenuPosition};
    };

    const pullDownButtonsReset = (buttonId) => {
        let menuId = buttonId? $pullDownButtonsSetup.find(pullDownButton => pullDownButton._id === buttonId).menuId : undefined;

        Object.keys($pullDownButtonsState).forEach(key => {
            if (key != buttonId) {
                $pullDownButtonsState[key].isActive = false;
            }
        });

        Object.keys($menusState).forEach(key => {
            if (key != menuId) {
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
            pullDownButtonsReset(undefined)
        }
    }
</script>

<style>
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
        border: 0.1rem solid rgb(45, 44, 43);
        background-color: rgb(112, 111, 110);
        outline: 0;
    }

    button:active,
    button.active {
        background-color: rgb(146, 145, 144);
    }

    .btn-no-under-label button,
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
        fill: rgb(242, 241, 240);
    }

    .caret-down {
        width: 0.7rem;
        margin-left: 0.3rem;
        fill: rgb(242, 241, 240);
    }

    .btn-label {
        font-size: 1.1rem;
        color: rgb(242, 241, 240);
    }

    .btn-under-label {
        text-align: center;
        font-size: 1.1rem;
        letter-spacing: 0.04rem;
        color: rgb(242, 241, 240);
        cursor: default;
        padding: 0.0rem 0.3rem;
        z-index: 10;
        display: block;
        fill: rgb(242, 241, 240);
        margin-top:  0.4rem;
    }
</style>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} on:resize={() => pullDownButtonPosition()} on:click={evaluateClick}/>

<div class="btn-wrapper {hasLabels ? '' : 'btn-no-under-label'}">
    <button id="{pullDownButtonSetup._id}" class="js-pull-down-button {$pullDownButtonsState[_id].isActive ? 'active' : ''}" on:click={() => pullDownButtonClick()}>
        {#if pullDownButtonSetup.iconName}
            <svg class="icon" viewBox="{getIcon(pullDownButtonSetup.iconName).viewBox}">
                <path d={getIcon(pullDownButtonSetup.iconName).d}/>
            </svg>
        {:else if pullDownButtonSetup.label}
            <span class="btn-label">{pullDownButtonSetup.label}</span>
        {:else}
            <span class="btn-label">No Text</span>
        {/if}
        <svg class="caret-down" viewBox="{getIcon('caret-down').viewBox}">
            <path d={getIcon('caret-down').d}/>
        </svg>
    </button>
    {#if pullDownButtonSetup.underLabel}
        <div class="btn-under-label">{pullDownButtonSetup.underLabel}</div>
    {/if}
</div>

<PullDownMenu _id={pullDownButtonSetup.menuId}/>