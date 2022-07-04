<script>
    import {Random} from 'meteor/random';

    import {viewsSetup, viewsState} from '../../../stores/viewsStore.js';

    export let _id;
    export let headingLevel = 'h4'
    export let device = 'laptop tablet';
    export let _class = 'black';

    let randomId = Random.id();
    let headingStateId = `${_id}-${randomId}`; 
    let headingSetup = $viewsSetup.find(heading => heading._id === _id);
</script>

{#if headingSetup.headingLevel === 'h1'}
    <h1 class="{_class} {device}">{headingSetup.heading}</h1>
{/if}

{#if headingSetup.headingLevel === 'h2'}
    <h2 class="{_class} {device}">{headingSetup.heading}</h2>
{/if}

{#if headingSetup.headingLevel === 'h3'}
    <h3 class="{_class} {device}">{headingSetup.heading}</h3>
{/if}

{#if headingSetup.headingLevel === 'h4'}
    <h4 class="{_class} {device}">{headingSetup.heading}</h4>
{/if}

{#if headingSetup.headingLevel === 'h5'}
    <h5 class="{_class} {device}">{headingSetup.heading}</h5>
{/if}

{#if headingSetup.headingLevel === 'h6'}
    <h6 class="{_class} {device}">{headingSetup.heading}</h6>
{/if}

<style>
    h1, h2, h3, h4, h5, h6 {
        line-height: 1;
        margin: 0;
        padding: 0;
        font-weight: 700;
    }

    h1 {
        font-size: 4.0rem;
    }

    h2 {
        font-size: 3.2rem;
    }

    h3 {
        font-size: 2.8rem;
    }

    h4 {
        font-size: 2.4rem;
    }

    h5 {
        font-size: 2.0rem;
    }

    h6 {
        font-size: 1.6rem;
    }

    .black {
        color: var(--black);
    }

    .gray {
        color: var(--gray);
    }

    .red {
        color: var(--red);
    }

    .orange {
        color: var(--orange);
    }

    .yello {
        color: var(--yello);
    }

    .green {
        color: var(--green);
    }

    .aqua {
        color: var(--aqua);
    }

    .blue {
        color: var(--blue);
    }

    .purple {
        color: var(--purple);
    }

    .pink {
        color: var(--pink);
    }
</style>