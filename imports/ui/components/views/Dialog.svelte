<script>
    import {fade} from 'svelte/transition';

    import {viewsSetup, viewsState} from '../../../stores/viewsStore.js';
    import Toolbar from "./Toolbar.svelte";

    export let _id;

    let dialogSetup = $viewsSetup.find(view => view._id === _id);
    let windowWidth;

    $viewsState[_id] = {
        isActive: dialogSetup.isActive,
    };

    export let dialogReset = () => {
        if (windowWidth < 768) {
            Object.keys($viewsState).forEach(key => {
                $viewsState[key].isActive = false;
            });
        }
    }
</script>

<svelte:window bind:innerWidth={windowWidth} on:resize={dialogReset}/>

{#if $viewsState[_id].isActive}
    <div class="cover" in:fade="{{duration: 100}}" out:fade="{{duration: 200}}">
        <div class="dialog">
            <div>{#if $viewsState[_id].isActive}True{:else}False{/if}</div>
            {#each dialogSetup.components as component}
                {#if component.componentType === 'Toolbar'}
                    <Toolbar _id={component.componentId} _class={component.componentClass}/>
                {/if}
            {/each}
        </div>
    </div>
{/if}

<style>
    @media only screen and (min-width: 0px) {
        .cover {
            display: none;
        }
    }
    @media only screen and (min-width: 768px) {
        .cover {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 15;
            background-color: var(--black-alpha);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .dialog {
            min-width: 48.0rem;
            min-height: 35.1rem;
            background-color: var(--white);
            border-radius: 1.2rem;
            box-shadow: 0.0rem 0.0rem 0.9rem var(--black-alpha);
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
        }
    }
</style>