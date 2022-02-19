<script>
    import {settingsState} from '../../../stores/settingsStore.js';
    import {toolbarsSetup} from '../../../stores/toolbarsStore.js';
    
    import PullDownButton from "../buttons/PullDownButton.svelte";
    import PushButton from "../buttons/PushButton.svelte";
    import SegmentedControl from "../selectors/SegmentedControl.svelte";
    import Space from "../spacing/Space.svelte";
    import FlexibleSpace from "../spacing/FlexibleSpace.svelte";

    export let _id = _id;
    let toolbarSetup = $toolbarsSetup.find(toolbar => toolbar._id === _id);
    let hasLabels = $settingsState.toolbarButtons.hasLabels;
</script>

<nav class="toolbar-phone">
    <div>Phone</div>
</nav>

<nav class="toolbar-tablet">
    <div>Tablet</div>
</nav>

<nav id="{toolbarSetup._id}" class="{hasLabels ? '' : 'toolbar-short'} toolbar-computer">
    {#each toolbarSetup.components as component}
        {#if component.componentType === 'PullDownButton'}
            <div class="component-container">
                <PullDownButton _id={component.componentId} hasLabels={hasLabels} color={'toolbar'}/>
            </div>
        {/if}
        {#if component.componentType === 'PushButton'}
            <div class="component-container">
                <PushButton _id={component.componentId} hasLabels={hasLabels} color={'toolbar'}/>
            </div>
        {/if}
        {#if component.componentType === 'SegmentedControl'}
            <div class="component-container">
                <SegmentedControl _id={component.componentId} hasLabels={hasLabels} color={'toolbar'}/>
            </div>
        {/if}
        {#if component.componentType === 'Space'}
                <Space />
        {/if}
        {#if component.componentType === 'FlexibleSpace'}
                <FlexibleSpace />
        {/if}
    {/each}
</nav>

<style>
	@media only screen and (min-width: 0px) {
        nav {
            display: flex;
            align-items: center;
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

        nav.toolbar-tablet,
        nav.toolbar-computer {
            display: none;
        }
    }

    @media only screen and (min-width: 768px) {
        nav.toolbar-tablet {
            display: flex;
        }

        nav.toolbar-phone {
            display: none;
        }
    }

	@media only screen and (min-width: 1024px) {
		nav {
            height: 5.0rem;
		}

        nav.toolbar-short {
            height: 3.8rem;
        }

        nav.toolbar-phone,
        nav.toolbar-tablet {
            display: none;
        }

        nav.toolbar-computer {
            display: flex;
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