<script>
    import {Random} from 'meteor/random'
    import {buttonsSetup} from '../../../stores/buttonsStore.js';
    import {getIcon} from '../../../stores/iconsStore.js';

    export let _id;
    export let color = 'gray';
    export let hasLabels = false;

    let randomId = Random.id();
    let buttonStateId = `${_id}-${randomId}`; 
    let buttonSetup = $buttonsSetup.find(pushButton => pushButton._id === _id);
    
    const pushButtonClick = () => {

    };
</script>

<div class="btn-container {color}">
    <div class="btn-wrapper {hasLabels ? '' : 'btn-no-under-label'}">
        <button id="{buttonStateId}" on:click={() => pushButtonClick()} aria-label="{buttonSetup.underLabel}">
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
        margin: 0.0rem 0.3rem;
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
    .toolbar .btn-label {
        fill: var(--white);
        color: var(--white);
    }

    .toolbar button:active .icon,
    .toolbar button.active .icon,
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
    .gray .btn-label {
        fill: var(--gray-dark);
        color: var(--gray-dark);
    }

    .gray button:active .icon,
    .gray button.active .icon,
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
    .red .btn-label {
        fill: var(--red-dark);
        color: var(--red-dark);
    }

    .red button:active .icon,
    .red button.active .icon,
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
    .orange .btn-label {
        fill: var(--orange-dark);
        color: var(--orange-dark);
    }

    .orange button:active .icon,
    .orange button.active .icon,
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
    .yellow .btn-label {
        fill: var(--yellow-dark);
        color: var(--yellow-dark);
    }

    .yellow button:active .icon,
    .yellow button.active .icon,
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
    .green .btn-label {
        fill: var(--green-dark);
        color: var(--green-dark);
    }

    .green button:active .icon,
    .green button.active .icon,
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
    .aqua .btn-label {
        fill: var(--aqua-dark);
        color: var(--aqua-dark);
    }

    .aqua button:active .icon,
    .aqua button.active .icon,
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
    .blue .btn-label {
        fill: var(--blue-dark);
        color: var(--blue-dark);
    }

    .blue button:active .icon,
    .blue button.active .icon,
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
    .purple .btn-label {
        fill: var(--purple-dark);
        color: var(--purple-dark);
    }

    .purple button:active .icon,
    .purple button.active .icon,
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
    .pink .btn-label {
        fill: var(--pink-dark);
        color: var(--pink-dark);
    }

    .pink button:active .icon,
    .pink button.active .icon,
    .pink button:active .btn-label,
    .pink button.active .btn-label {
        fill: var(--white);
        color: var(--white);
    }
</style>