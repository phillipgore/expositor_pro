<script>
    import {settingsState} from '../../../stores/settingsStore.js';
    import {toolbarsSetup, toolbarsState} from '../../../stores/toolbarsStore.js';
    import PullDownButton from "../buttons/PullDownButton.svelte";
    import PushButton from "../buttons/PushButton.svelte";
    import SegmentedControl from "../selectors/SegmentedControl.svelte";
    import Space from "../spacing/Space.svelte";
    import FlexibleSpace from "../spacing/FlexibleSpace.svelte";

    export let _id = _id;
    let toolbarSetup = $toolbarsSetup.find(toolbar => toolbar._id === _id);
    let hasLabels = $settingsState.toolbarButtons.hasLabels;
</script>

<style>
	@media only screen and (min-width: 0px) {
        nav {
            height: 4.5rem;
            background-color: var(--gray-200);
            display: flex;
            align-items: center;
            position: fixed;
            z-index: 10;
            top: 0;
            right: 0;
            left: 0;
        }
    }

	@media only screen and (min-width: 768px) {
		nav {
			height: 5.0rem;
			padding: 0.0rem 0.6rem;
		}

        nav.nav-short {
            height: 3.8rem;
        }
	}
</style>

<nav id="{toolbarSetup._id}" class="{hasLabels ? '' : 'nav-short'}">
    {#each toolbarSetup.components as component}
        {#if component.componentType === 'PullDownButton'}<PullDownButton _id={component.componentId}/>{/if}
        {#if component.componentType === 'PushButton'}<PushButton _id={component.componentId} />{/if}
        {#if component.componentType === 'SegmentedControl'}<SegmentedControl _id={component.componentId} />{/if}
        {#if component.componentType === 'Space'}<Space />{/if}
        {#if component.componentType === 'FlexibleSpace'}<FlexibleSpace />{/if}
    {/each}
</nav>