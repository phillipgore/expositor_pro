<script>
    import {settingsState} from '../../modules/stores/settingsStore.js';
    import {segmentedControlsSetup, segmentedControlsState} from '../../modules/stores/segmentedControlsStore.js';
    import {pullDownButtonsState} from '../../modules/stores/pullDownButtonsStore.js';
    import {menusState} from '../../modules/stores/menusStore.js';
    import {getIcon} from '../../modules/stores/iconsStore.js';
    
    export let _id = _id;
    let hasLabels = $settingsState.toolbarButtons.hasLabels;
    let segmentedControlSetup = $segmentedControlsSetup.find(segmentedControl => segmentedControl._id === _id);

    $segmentedControlsState[_id] = {isActive: segmentedControlSetup.isActive};

    const segmentedControlClick = (_id) => {

    };
</script>

<style>
    .btn-grouped {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0.0rem 0.3rem;
    }

    .btn-wrapper {
        display: flex;
        flex-direction: column;
        position: relative;
        margin: 0.0rem;
    }

    button {
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 2.4rem;
        margin:  0rem auto;
        border: 0.1rem solid var(--gray-200-light-accent);
        background-color: var(--gray-400);
        outline: 0;

        border-left: none;
        border-radius: 0.0rem;
        width: 100%; 
        min-width: 5.4rem;
    }

    .btn-grouped .btn-wrapper:first-of-type button {
        border-radius: 0.3rem 0.0rem 0.0rem 0.3rem;
    }

    .btn-grouped .btn-wrapper:last-of-type button {
        border-right: none;
        border-radius: 0.0rem 0.3rem 0.3rem 0.0rem;
    }

    button:active,
    button.active {
        background-color: var(--gray-600);
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
        fill: var(--gray-900);
    }

    .caret-down {
        width: 0.7rem;
        margin-left: 0.3rem;
        fill: var(--gray-900);
    }

    .btn-label {
        font-size: 1.1rem;
        color: var(--gray-900);
    }

    .btn-under-label {
        text-align: center;
        font-size: 1.1rem;
        letter-spacing: 0.04rem;
        color: var(--gray-900);
        cursor: default;
        padding: 0.0rem 0.3rem;
        z-index: 10;
        display: block;
        fill: var(--gray-900);
        margin-top:  0.4rem;
    }
</style>

<div class="btn-grouped">
    {#each segmentedControlSetup.segments as segment}
        <div class="btn-wrapper {hasLabels ? '' : 'btn-no-under-label'}">
            <button id="{segment._id}" class="{$segmentedControlsState[_id].isActive ? 'active' : ''}" on:click={() => segmentedControlClick(segment._id)}>
                {#if segment.iconName}
                    <svg class="icon" viewBox="{getIcon(segment.iconName).viewBox}">
                        <path d={getIcon(segment.iconName).d}/>
                    </svg>
                {:else if segment.label}
                    <span class="btn-label">{segment.label}</span>
                {:else}
                    <span class="btn-label">No Text</span>
                {/if}
            </button>
            {#if segment.underLabel}
                <div class="btn-under-label">{segment.underLabel}</div>
            {/if}
        </div>
    {/each}
</div>