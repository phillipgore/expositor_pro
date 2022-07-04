<script>
    import {fly} from 'svelte/transition';

    import {appState} from '../../../stores/appStore.js';
    import {viewsSetup, viewsState} from '../../../stores/viewsStore.js';
    
    import Heading from "./Heading.svelte";
    import PullDownButton from "../buttons/PullDownButton.svelte";
    import PushButton from "../buttons/PushButton.svelte";
    import SlideUpButton from "../buttons/SlideUpButton.svelte";
    import SegmentedControl from "../selectors/SegmentedControl.svelte";
    import Space from "../spacing/Space.svelte";
    import FlexibleSpace from "../spacing/FlexibleSpace.svelte";

    export let _id = _id;
    export let _class = 'gray-200';
    let toolbarSetup = $viewsSetup.find(toolbar => toolbar._id === _id);
    let hasLabels = $appState.toolbarButtons.hasLabels;

    $viewsState[_id] = {isHidden: viewsSetup.isHidden};
</script>

{#if !$viewsState[_id].isHidden}
    <!-- <nav id="{toolbarSetup._id}" class="{hasLabels ? '' : 'toolbar-short'}" in:fly="{{ y: -45, duration: 200, opacity: 100, delay: 200 }}" out:fly="{{ y: -45, duration: 300, opacity: 100 }}"> -->
    <nav id="{toolbarSetup._id}" class="{hasLabels ? '' : 'toolbar-short'} {_class}">
        {#each toolbarSetup.components as component}
            {#if component.componentType === 'Heading'}
                <div class="component-container {component.componentDevice}">
                    <Heading _id={component.componentId} />
                </div>
            {/if}
            {#if component.componentType === 'PullDownButton'}
                <div class="component-container {component.componentDevice}">
                    <PullDownButton _id={component.componentId} device={component.componentDevice} hasLabels={hasLabels} _class={component.componentClass}/>
                </div>
            {/if}
            {#if component.componentType === 'PushButton'}
                <div class="component-container {component.componentDevice}">
                    <PushButton 
                        _id={component.componentId} 
                        device={component.componentDevice} 
                        hasLabels={hasLabels} 
                        _class={component.componentClass}
                        targetId={component.targetId}
                        targetType={component.targetType}
                        targetKey={component.targetKey}
                        targetValue={component.targetValue}
                    />
                </div>
            {/if}
            {#if component.componentType === 'SlideUpButton'}
                <div class="component-container {component.componentDevice}">
                    <SlideUpButton _id={component.componentId} device={component.componentDevice} hidesToolbarIds={component.hidesToolbarIds} _class={component.componentClass}/>
                </div>
            {/if}
            {#if component.componentType === 'SegmentedControl'}
                <div class="component-container {component.componentDevice}">
                    <SegmentedControl _id={component.componentId} device={component.componentDevice} hasLabels={hasLabels} _class={component.componentClass}/>
                </div>
            {/if}
            {#if component.componentType === 'Space'}
                    <Space device={component.componentDevice}/>
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
			padding: 0.0rem 1.2rem;
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            z-index: 10;
            height: 4.5rem;
        }

        nav.bottom {
            top: unset;
            bottom: 0;
        }

        nav.gray-200 {
            background-color: var(--gray-200);
            background-color: var(--gray-200);
        }

        nav.white {
            background-color: var(--white);
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
            margin: 0rem 0.2rem;
        }

        .component-container:first-child {
            margin-left: 0rem;
        }

        .component-container:last-child {
            margin-right: 0rem;
        }
	}
</style>