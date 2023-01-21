<script>
    import {Random} from 'meteor/random';

    import {getIcon} from '../../stores/icons.js';
    import Menu from "./Menu.svelte";
    import ButtonGrouped from "./ButtonGrouped.svelte";
    import {buttonState, menuState} from '../../stores/store.js';

    let _id = Random.id();

    export let groupId = undefined;
    export let isActive = false;
    export let label = undefined;
    export let labelActive = undefined;
    export let menuId = `selectMenu${_id}`;
    export let sheetId = undefined;
    export let isMultiSelect = false;

    let button;
    let windowWidth;
    let windowHeight;

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
        menuToggle();
    }

    const evaluateClick = (event) => {
        // if (!event.target.dataset.menuId && event.target.dataset.isMultiSelect === "false" || !event.target.dataset.isMultiSelect) {
        //     menuReset(undefined, undefined)
        // }
    }

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
            $menuState[menuId].menuLeft = menuLeft;
            $menuState[menuId].isActive = true;
        }
    }

    const menuReset = (buttonId, menuId) => {
        console.log('menuReset;')
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
    _id="{_id}" 
    class="select" 
    on:click={buttonClick} 
    bind:this={button}
    data-is-multi-select={isMultiSelect}
    data-menu-id={menuId}
    data-sheet-id={sheetId}
>
    Phillip Gore
    <div class="select-handle">
        <svg class="select-icon" viewBox="{getIcon('caret-up').viewBox}">
            <path d={getIcon('caret-up').d}/>
        </svg>
        <svg class="select-icon" viewBox="{getIcon('caret-down').viewBox}">
            <path d={getIcon('caret-down').d}/>
        </svg>
    </div>
</button>

<Menu _id='{`selectMenu${_id}`}'>
    <ButtonGrouped isList >
        <slot name="menuItems" />
    </ButtonGrouped>
</Menu>

<style>
    .select { 
        display: inline-flex;
        align-items: center;
        height: 2.4rem;
        padding: 0.3rem 3.0rem 0.3rem 0.6rem;
        border-radius: 0.3rem;
        border-width: 0.1rem;
        border-style: solid;
        border-color: var(--gray-700);
        background-color: var(--white);
        font-size: 1.2rem; 
        position: relative;
        outline: 0;
    }

    .select-handle {
        content: '';
        height: 1.8rem;
        width: 1.8rem;
        border-radius: 0.3rem;
        background-color: var(--system-blue);
        position: absolute;
        top: 0.2rem;
        right: 0.2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .select-icon {
        fill: var(--white);
        width: 0.8rem;
        padding: 0.15rem 0.0rem;
    }
</style>