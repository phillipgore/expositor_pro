<script>
    import {settingsState} from '../../modules/stores/settingsStore.js';
    import {toolbarsSetup, toolbarsState} from '../../modules/stores/toolbarsStore.js';
    import PullDownButton from "./PullDownButton.svelte";
    import PushButton from "./PushButton.svelte";
    import SegmentedControl from "./SegmentedControl.svelte";
    import Spacing from "./Spacing.svelte";

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
        {#if component.componentType === 'PullDownButton'}<PullDownButton _id={component.componentId} toolbarId={_id}/>{/if}
        {#if component.componentType === 'PushButton'}<PushButton _id={component.componentId} />{/if}
        {#if component.componentType === 'SegmentedControl'}<SegmentedControl _id={component.componentId} />{/if}
        {#if component.componentType === 'Spacing'}<Spacing _id={component.componentId} />{/if}
    {/each}
</nav>