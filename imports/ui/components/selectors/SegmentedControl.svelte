<script>
    import {settingsState} from '../../../stores/settingsStore.js';
    import {segmentedControlsSetup, segmentedControlsState} from '../../../stores/segmentedControlsStore.js';
    import {buttonsSetup, buttonsState} from '../../../stores/buttonsStore.js';
    import {getIcon} from '../../../stores/iconsStore.js';
    
    export let _id;
    export let color = 'gray';
    export let hasLabels = false;

    let segmentedControlSetup = $segmentedControlsSetup.find(segmentedControl => segmentedControl._id === _id);
    let components = segmentedControlSetup.components.map(component => component.componentId);
    let segments = $buttonsSetup.filter(button => components.includes(button._id));

    segments.forEach(segment => {
        $buttonsState[segment._id] = {isSelected: segment.isSelected}
    });

    const segmentedControlClick = (buttonId) => {
        segments.forEach(segment => {
            if (segment._id != buttonId) {
                $buttonsState[segment._id].isSelected = false;
            } else {
                $buttonsState[segment._id].isSelected = true;
            }
        });
    };
</script>

<div class="btn-container {color}">
    <div class="btn-grouped">
        {#each segments as segment}
            <div class="btn-wrapper {hasLabels ? '' : 'btn-no-under-label'}">
                <button id="{_id}" class="{$buttonsState[segment._id].isSelected ? 'selected' : ''}" on:click={() => segmentedControlClick(segment._id)} aria-label="{segment.underLabel}">
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
</div>

<style>
    .btn-container {
        display: inline-block;
    }

    .btn-grouped {
        display: flex;
        justify-content: center;
        align-items: center;
        height: auto;
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
        min-width: 4.8rem; 
        padding: 0rem 0.6rem;
        margin:  0rem auto;
        outline: 0;
        border: 0.1rem solid;
        border-radius: 0.0rem;
        width: 100%; 
        min-width: 5.4rem;
    }

    .btn-grouped .btn-wrapper:first-of-type button {
        border-radius: 0.3rem 0.0rem 0.0rem 0.3rem;
    }

    .btn-grouped .btn-wrapper:last-of-type button {
        border-radius: 0.0rem 0.3rem 0.3rem 0.0rem;
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
    }

    button.selected .icon {
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

    .toolbar button.selected {
        background-color: var(--gray-800);
    }

    .toolbar .icon,
    .toolbar .btn-label {
        fill: var(--white);
        color: var(--white);
    }

    .toolbar button.selected .icon,
    .toolbar button.selected .btn-label  {
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

    .gray button.selected {
        border-color: var(--gray);
        background-color: var(--gray);
    }

    .gray .icon,
    .gray .btn-label {
        fill: var(--gray-dark);
        color: var(--gray-dark);
    }

    .gray button.selected .icon,
    .gray button.selected .btn-label {
        fill: var(--white);
        color: var(--white);
    }



    /* .red styles */
    .red button {
        border-color: var(--red);
        background-color: var(--red-light);
    }

    .red button.selected {
        border-color: var(--red);
        background-color: var(--red);
    }

    .red .icon,
    .red .btn-label {
        fill: var(--red-dark);
        color: var(--red-dark);
    }

    .red button.selected .icon,
    .red button.selected .btn-label {
        fill: var(--white);
        color: var(--white);
    }



    /* .orange styles */
    .orange button {
        border-color: var(--orange);
        background-color: var(--orange-light);
    }

    .orange button.selected {
        border-color: var(--orange);
        background-color: var(--orange);
    }

    .orange .icon,
    .orange .btn-label {
        fill: var(--orange-dark);
        color: var(--orange-dark);
    }

    .orange button.selected .icon,
    .orange button.selected .btn-label {
        fill: var(--white);
        color: var(--white);
    }



    /* .yellow styles */
    .yellow button {
        border-color: var(--yellow);
        background-color: var(--yellow-light);
    }

    .yellow button.selected {
        border-color: var(--yellow);
        background-color: var(--yellow);
    }

    .yellow .icon,
    .yellow .btn-label {
        fill: var(--yellow-dark);
        color: var(--yellow-dark);
    }

    .yellow button.selected .icon,
    .yellow button.selected .btn-label {
        fill: var(--white);
        color: var(--white);
    }



    /* .green styles */
    .green button {
        border-color: var(--green);
        background-color: var(--green-light);
    }

    .green button.selected {
        border-color: var(--green);
        background-color: var(--green);
    }

    .green .icon,
    .green .btn-label {
        fill: var(--green-dark);
        color: var(--green-dark);
    }

    .green button.selected .icon,
    .green button.selected .btn-label {
        fill: var(--white);
        color: var(--white);
    }



    /* .aqua styles */
    .aqua button {
        border-color: var(--aqua);
        background-color: var(--aqua-light);
    }

    .aqua button.selected {
        border-color: var(--aqua);
        background-color: var(--aqua);
    }

    .aqua .icon,
    .aqua .btn-label {
        fill: var(--aqua-dark);
        color: var(--aqua-dark);
    }

    .aqua button.selected .icon,
    .aqua button.selected .btn-label {
        fill: var(--white);
        color: var(--white);
    }



    /* .blue styles */
    .blue button {
        border-color: var(--blue);
        background-color: var(--blue-light);
    }

    .blue button.selected {
        border-color: var(--blue);
        background-color: var(--blue);
    }

    .blue .icon,
    .blue .btn-label {
        fill: var(--blue-dark);
        color: var(--blue-dark);
    }

    .blue button.selected .icon,
    .blue button.selected .btn-label {
        fill: var(--white);
        color: var(--white);
    }



    /* .purple styles */
    .purple button {
        border-color: var(--purple);
        background-color: var(--purple-light);
    }

    .purple button.selected {
        border-color: var(--purple);
        background-color: var(--purple);
    }

    .purple .icon,
    .purple .btn-label {
        fill: var(--purple-dark);
        color: var(--purple-dark);
    }

    .purple button.selected .icon,
    .purple button.selected .btn-label {
        fill: var(--white);
        color: var(--white);
    }



    /* .pink styles */
    .pink button {
        border-color: var(--pink);
        background-color: var(--pink-light);
    }

    .pink button.selected {
        border-color: var(--pink);
        background-color: var(--pink);
    }

    .pink .icon,
    .pink .btn-label {
        fill: var(--pink-dark);
        color: var(--pink-dark);
    }

    .pink button.selected .icon,
    .pink button.selected .btn-label {
        fill: var(--white);
        color: var(--white);
    }
</style>