<script>
    import {fly} from 'svelte/transition';

    import {settingsState} from '../../../stores/settingsStore.js';
    import {toolbarsSetup, toolbarsState} from '../../../stores/toolbarsStore.js';
    
    import PullDownButton from "../buttons/PullDownButton.svelte";
    import PushButton from "../buttons/PushButton.svelte";
    import SlideUpButton from "../buttons/SlideUpButton.svelte";
    import SegmentedControl from "../selectors/SegmentedControl.svelte";
    import Space from "../spacing/Space.svelte";
    import FlexibleSpace from "../spacing/FlexibleSpace.svelte";

    export let _id = _id;
    let toolbarSetup = $toolbarsSetup.find(toolbar => toolbar._id === _id);
    let hasLabels = $settingsState.toolbarButtons.hasLabels;

    $toolbarsState[_id] = {isHidden: toolbarsSetup.isHidden};
</script>

{#if !$toolbarsState[_id].isHidden}
    <nav id="{toolbarSetup._id}" class="{hasLabels ? '' : 'toolbar-short'}" in:fly="{{ y: -45, duration: 200, opacity: 100, delay: 200 }}" out:fly="{{ y: -45, duration: 300, opacity: 100 }}">
        {#each toolbarSetup.components as component}
            {#if component.componentType === 'PullDownButton'}
                <div class="component-container {component.componentDevice}">
                    <PullDownButton _id={component.componentId} device={component.componentDevice} hasLabels={hasLabels} color={'toolbar'}/>
                </div>
            {/if}
            {#if component.componentType === 'PushButton'}
                <div class="component-container {component.componentDevice}">
                    <PushButton _id={component.componentId} device={component.componentDevice} hasLabels={hasLabels} color={'toolbar'}/>
                </div>
            {/if}
            {#if component.componentType === 'SlideUpButton'}
                <div class="component-container {component.componentDevice}">
                    <SlideUpButton _id={component.componentId} device={component.componentDevice} hidesToolbarIds={component.hidesToolbarIds} color={'toolbar'}/>
                </div>
            {/if}
            {#if component.componentType === 'SegmentedControl'}
                <div class="component-container {component.componentDevice}">
                    <SegmentedControl _id={component.componentId} device={component.componentDevice} hasLabels={hasLabels} color={'toolbar'}/>
                </div>
            {/if}
            {#if component.componentType === 'Space'}
                    <Space  device={component.componentDevice}/>
            {/if}
            {#if component.componentType === 'FlexibleSpace'}
                    <FlexibleSpace  device={component.componentDevice}/>
            {/if}
        {/each}
    </nav>
{/if}

<style>
	@media only screen and (min-width: 0px) {
        nav {
            display: flex;
            align-items: center;
            margin: 0.0rem;
			padding: 0.0rem 0.9rem;
            background-color: var(--gray-200);
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            z-index: 10;
            height: 4.5rem;
            color: var(--white);
        }
    }

    @media only screen and (min-width: 768px) {
		nav {
            height: 5.0rem;
		}

        nav.toolbar-short {
            height: 3.8rem;
        }

        .component-container {
            margin: 0rem 0.25rem;
        }

        .component-container:first-child {
            margin-left: 0rem;
        }

        .component-container:last-child {
            margin-right: 0rem;
        }
	}
</style>