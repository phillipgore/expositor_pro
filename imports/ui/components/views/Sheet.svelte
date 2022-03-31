<script>
    import {fly} from 'svelte/transition';

    import {viewsSetup, viewsState} from '../../../stores/viewsStore.js';
    import {settingsState} from '../../../stores/settingsStore.js';
    import {getIcon} from '../../../stores/iconsStore.js';

    export let _id;

    let sheetSetup = $viewsSetup.find(sheet => sheet._id === _id);
    let windowWidth;
    let windowHeight;

    $viewsState[_id] = {
        isActive: viewsSetup.isActive,
    };

    const getFlyY = () => {
        if (sheetSetup.isFullHeight) {
            return windowHeight;
        }
        return windowHeight * 0.42;
    };

    const closeSheet = () => {
        $viewsState[_id].isActive = false;
        $settingsState.wrapperIsRecessed = false;
        resetToolbars();
    };

    const resetToolbars = () => {
        Object.keys($viewsState).forEach(key => {
            $viewsState[key].isHidden = false;
        });
    }
</script>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight}/>

{#if $viewsState[_id].isActive}
    <div class="sheet {sheetSetup.isFullHeight ? 'sheet-full' : ''}" in:fly="{{ y: getFlyY(), duration: 200, opacity: 100 }}" out:fly="{{ y: getFlyY(), duration: 300, opacity: 100 }}">
        <div class="sheet-title-bar">
            <h1 class="sheet-title">{sheetSetup.label}</h1>
            <button class="sheet-close" on:click={() => closeSheet()}>
                <svg class="icon-close" viewBox="{getIcon('plus-circle').viewBox}">
                    <path d={getIcon('plus-circle').d}/>
                </svg>
            </button>
        </div>
        <div class="sheet-content">
            
        </div>
    </div>
{/if}

<style>
    @media only screen and (min-width: 0px) {
        .sheet {
            height: calc(100vh * 0.42);
            border-radius: 1.4rem 1.4rem 0.0rem 0.0rem;
            overflow: hidden;
            background-color: var(--gray-800);
            position: fixed;
            right: 0;
            left: 0;
            bottom: 0;
            z-index: 20;
            box-shadow: 0.0rem 0.0rem 0.9rem var(--black-alpha);
        }

        .sheet.sheet-full {
            height: calc(100vh - 2.8rem);
        }

        .sheet-title-bar {
            position: relative;
        }

        .sheet-title {
            font-size: 1.4rem;
            font-weight: 500;
            padding: 0.0rem ;
            margin: 0.0rem;
            height: 3.2rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .sheet-close {
            position: absolute;
            top: 0.0rem;
            right: 0.0rem;
            height: 3.2rem;
            width: 2.6rem;
            display: flex;
            align-items: center;
            background-color: transparent;
            border: none;
            padding: 0.0rem;
        }

        .icon-close {
            transform: rotate(45deg);
            height: 2.0rem;
            width: 2.0rem;
            fill: #363636;
        }

        .sheet-content {
            overflow-x: hidden; 
            overflow-x: auto; 
            position: absolute;
            top: 2.8rem;
            right: 0.0rem;
            bottom: 0.0rem;
            left: 0.0rem;
        }
    }
    @media only screen and (min-width: 768px) {
        .sheet {
            display: none;
        }
    }
</style>