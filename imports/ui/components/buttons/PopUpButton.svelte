<script>
    import {Random} from 'meteor/random';
    
    import {buttonsSetup} from '../../../stores/buttonsStore.js';
    export let _id;
    export let device = 'laptop tablet';

    let randomId = Random.id();
    let buttonStateId = `${_id}-${randomId}`; 
    let buttonSetup = $buttonsSetup.find(pushButton => pushButton._id === _id);

    const popUpButtonClick = () => {

    }
</script>

<button id="{buttonStateId}" class="{device}" on:click={() => popUpButtonClick()} disabled="{buttonSetup.isDisabled}">
    Button Label
</button>

<style>
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
        border: 0.1rem solid var(--gray);
        outline: 0;
    }
</style>
