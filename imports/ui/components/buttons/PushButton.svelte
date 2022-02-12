<script>
    import {Random} from 'meteor/random';
    
    import {buttonsSetup} from '../../../stores/buttonsStore.js';
    import {getIcon} from '../../../stores/iconsStore.js';

    export let _id;
    export let color = 'gray';
    export let hasLabels = false;

    let randomId = Random.id();
    let buttonStateId = `${_id}-${randomId}`; 
    let buttonSetup = $buttonsSetup.find(pushButton => pushButton._id === _id);
    
    const pushButtonClick = () => {
        alert('Clicked');
    };
</script>

<div class="btn-container {color}">
    <div class="btn-wrapper {hasLabels ? '' : 'btn-no-under-label'}">
        <button id="{buttonStateId}" on:click={() => pushButtonClick()} aria-label="{buttonSetup.underLabel}" disabled="{buttonSetup.isDisabled}">
            {#if buttonSetup.iconName}
                <svg class="icon" viewBox="{getIcon(buttonSetup.iconName).viewBox}">
                    <path d={getIcon(buttonSetup.iconName).d}/>
                </svg>
            {:else if buttonSetup.label}
                <span class="btn-label">{buttonSetup.label}</span>
            {:else}
                <span class="btn-label">No Text</span>
            {/if}
        </button>
        {#if buttonSetup.underLabel}
            <div class="btn-under-label">{buttonSetup.underLabel}</div>
        {/if}
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
        background-color: var(--gray-500);
    }

    .toolbar button:active:enabled,
    .toolbar button.active:enabled {
        background-color: var(--gray-800);
    }

    .toolbar .icon,
    .toolbar .btn-label {
        fill: var(--white);
        color: var(--white);
    }

    .toolbar button:active .icon:enabled,
    .toolbar button.active .icon:enabled,
    .toolbar button:active .btn-label:enabled,
    .toolbar button.active .btn-label:enabled {
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
    .gray .btn-label {
        fill: var(--gray-dark);
        color: var(--gray-dark);
    }

    .gray button:active:enabled .icon,
    .gray button.active:enabled .icon,
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
    .red .btn-label {
        fill: var(--red-dark);
        color: var(--red-dark);
    }

    .red button:active:enabled .icon,
    .red button.active:enabled .icon,
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
    .orange .btn-label {
        fill: var(--orange-dark);
        color: var(--orange-dark);
    }

    .orange button:active:enabled .icon,
    .orange button.active:enabled .icon,
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
    .yellow .btn-label {
        fill: var(--yellow-dark);
        color: var(--yellow-dark);
    }

    .yellow button:active:enabled .icon,
    .yellow button.active:enabled .icon,
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
    .green .btn-label {
        fill: var(--green-dark);
        color: var(--green-dark);
    }

    .green button:active:enabled .icon,
    .green button.active:enabled .icon,
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
    .aqua .btn-label {
        fill: var(--aqua-dark);
        color: var(--aqua-dark);
    }

    .aqua button:active:enabled .icon,
    .aqua button.active:enabled .icon,
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
    .blue .btn-label {
        fill: var(--blue-dark);
        color: var(--blue-dark);
    }

    .blue button:active:enabled .icon,
    .blue button.active:enabled .icon,
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
    .purple .btn-label {
        fill: var(--purple-dark);
        color: var(--purple-dark);
    }

    .purple button:active:enabled .icon,
    .purple button.active:enabled .icon,
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
    .pink .btn-label {
        fill: var(--pink-dark);
        color: var(--pink-dark);
    }

    .pink button:active:enabled .icon,
    .pink button.active:enabled .icon,
    .pink button:active:enabled .btn-label,
    .pink button.active:enabled .btn-label {
        fill: var(--white);
        color: var(--white);
    }
    



    button:disabled {
        opacity: 0.55;
    }

    button:disabled  .icon,
    button:disabled  .btn-label {
        opacity: 0.75;
    }

    button:disabled + .btn-under-label {
        opacity: 0.65;
    }
</style>