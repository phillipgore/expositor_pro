<script>
    import {Random} from 'meteor/random';
    
    import {buttonsSetup, buttonsState} from '../../../stores/buttonsStore.js';
    import {viewsSetup, viewsState} from '../../../stores/viewsStore.js';
    import {appState} from '../../../stores/appStore.js';
    import {getIcon} from '../../../stores/iconsStore.js';

    export let _id;
    export let device;
    export let hidesToolbarIds;
    export let color = 'gray';

    let randomId = Random.id();
    let buttonStateId = `${_id}-${randomId}`; 
    let buttonSetup = $buttonsSetup.find(pushButton => pushButton._id === _id);

    $buttonsState[buttonStateId] = {isActive: buttonSetup.isActive};
    
    const pushButtonClick = () => {
        sheetsReset(buttonSetup.sheetId);
        let sheetSetup = $viewsSetup.find(sheet => sheet._id === buttonSetup.sheetId);
        if (sheetSetup.isFullHeight) {
            $appState.containerIsRecessed = true;
        }
        hidesToolbarIds.forEach(toolbarId => {
            $viewsState[toolbarId].isHidden = true;
        });
        $viewsState[buttonSetup.sheetId].isActive =  true;
    };

    const sheetsReset = (sheetId) => {
        Object.keys($viewsState).forEach(key => {
            if (key != sheetId) {
                $viewsState[key].isActive = false;
            }
        });
    };
</script>

<button id="{buttonStateId}" class="{color} {device}" on:click={() => pushButtonClick()} aria-label="{buttonSetup.underLabel}" disabled="{buttonSetup.isDisabled}">
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

<style>
    button {
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 2.4rem;
        min-width: 2.4rem; 
        margin:  0rem auto;
        border: none;
        outline: 0;
        background-color: transparent;
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



    /* --- Color Options --- */
    /* .toolbar styles */
    button.toolbar {
        height: 4.5rem;
        min-width: 4.5rem; 
    }
    .toolbar .icon,
    .toolbar .btn-label {
        height: 2.4rem;
        max-width: 2.4rem;
        fill: var(--white);
        color: var(--white);
    }

    button.toolbar:active .icon:enabled,
    button.toolbar.active .icon:enabled,
    button.toolbar:active .btn-label:enabled,
    button.toolbar.active .btn-label:enabled {
        fill: var(--gray-200);
        color: var(--gray-200);
    }
    
    /* .gray styles */
    .gray .icon,
    .gray .btn-label {
        fill: var(--gray);
        color: var(--gray);
    }

    button.gray:active:enabled .icon,
    button.gray.active:enabled .icon,
    button.gray:active:enabled .btn-label,
    button.gray.active:enabled .btn-label {
        fill: var(--white);
        color: var(--white);
    }
    
    /* .red styles */
    .red .icon,
    .red .btn-label {
        fill: var(--red);
        color: var(--red);
    }

    button.red:active:enabled .icon,
    button.red.active:enabled .icon,
    button.red:active:enabled .btn-label,
    button.red.active:enabled .btn-label {
        fill: var(--white);
        color: var(--white);
    }
    
    /* .orange styles */
    .orange .icon,
    .orange .btn-label {
        fill: var(--orange);
        color: var(--orange);
    }

    button.orange:active:enabled .icon,
    button.orange.active:enabled .icon,
    button.orange:active:enabled .btn-label,
    button.orange.active:enabled .btn-label {
        fill: var(--white);
        color: var(--white);
    }
    
    /* .yellow styles */
    .yellow .icon,
    .yellow .btn-label {
        fill: var(--yellow);
        color: var(--yellow);
    }

    button.yellow:active:enabled .icon,
    button.yellow.active:enabled .icon,
    button.yellow:active:enabled .btn-label,
    button.yellow.active:enabled .btn-label {
        fill: var(--white);
        color: var(--white);
    }
    
    /* .green styles */
    .green .icon,
    .green .btn-label {
        fill: var(--green);
        color: var(--green);
    }

    button.green:active:enabled .icon,
    button.green.active:enabled .icon,
    button.green:active:enabled .btn-label,
    button.green.active:enabled .btn-label {
        fill: var(--white);
        color: var(--white);
    }
    
    /* .aqua styles */
    .aqua .icon,
    .aqua .btn-label {
        fill: var(--aqua);
        color: var(--aqua);
    }

    button.aqua:active:enabled .icon,
    button.aqua.active:enabled .icon,
    button.aqua:active:enabled .btn-label,
    button.aqua.active:enabled .btn-label {
        fill: var(--white);
        color: var(--white);
    }
    
    /* .blue styles */
    .blue .icon,
    .blue .btn-label {
        fill: var(--blue);
        color: var(--blue);
    }

    button.blue:active:enabled .icon,
    button.blue.active:enabled .icon,
    button.blue:active:enabled .btn-label,
    button.blue.active:enabled .btn-label {
        fill: var(--white);
        color: var(--white);
    }
    
    /* .purple styles */
    .purple .icon,
    .purple .btn-label {
        fill: var(--purple);
        color: var(--purple);
    }

    button.purple:active:enabled .icon,
    button.purple.active:enabled .icon,
    button.purple:active:enabled .btn-label,
    button.purple.active:enabled .btn-label {
        fill: var(--white);
        color: var(--white);
    }
    
    /* .pink styles */
    .pink .icon,
    .pink .btn-label {
        fill: var(--pink);
        color: var(--pink);
    }

    button.pink:active:enabled .icon,
    button.pink.active:enabled .icon,
    button.pink:active:enabled .btn-label,
    button.pink.active:enabled .btn-label {
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