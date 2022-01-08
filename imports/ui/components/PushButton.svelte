<script>
    import {settingsState} from '../../modules/stores/settingsStore.js';
    import {pushButtonsSetup} from '../../modules/stores/pushButtonsStore.js';
    import {pullDownButtonsState} from '../../modules/stores/pullDownButtonsStore.js';
    import {menusState} from '../../modules/stores/menusStore.js';
    import {getIcon} from '../../modules/stores/iconsStore.js';

    export let _id = _id;
    let hasLabels = $settingsState.toolbarButtons.hasLabels;
    let pushButtonSetup = $pushButtonsSetup.find(pushButton => pushButton._id === _id);
    
    const pushButtonClick = () => {

    };
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

<div class="btn-wrapper {hasLabels ? '' : 'btn-no-under-label'}">
    <button id="{pushButtonSetup._id}" on:click={() => pushButtonClick()}>
        {#if pushButtonSetup.iconName}
            <svg class="icon" viewBox="{getIcon(pushButtonSetup.iconName).viewBox}">
                <path d={getIcon(pushButtonSetup.iconName).d}/>
            </svg>
        {:else if pushButtonSetup.label}
            <span class="btn-label">{pushButtonSetup.label}</span>
        {:else}
            <span class="btn-label">No Text</span>
        {/if}
    </button>
    {#if pushButtonSetup.underLabel}
        <div class="btn-under-label">{pushButtonSetup.underLabel}</div>
    {/if}
</div>