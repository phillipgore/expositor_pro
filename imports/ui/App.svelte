<script>
	import Toolbar from "./components/views/Toolbar.svelte";
	import Sheet from "./components/views/Sheet.svelte";

	import {settingsState} from '../stores/settingsStore.js';
    import {sheetsSetup, sheetsState} from '../stores/sheetsStore.js';
</script>

<div class="wrapper {$settingsState.wrapperIsRecessed ? 'recess' : ''}">
	<Toolbar _id={'toolbar'}/>	
	<main>

	</main>
</div>

{#each $sheetsSetup as sheet}
	<Sheet _id={sheet._id}/>
{/each}
		
<style>
	.wrapper {
		position: relative;
		min-height: 100vh;
		background-color: var(--white);
		border-radius: 0.0rem 0.0rem 0.0rem 0.0rem;
		transition: min-height 200ms ease-in-out, margin 200ms ease-in-out, border-radius 200ms ease-in-out;
	}

	.wrapper.recess {
		min-height: calc(100vh - 1.4rem);
		margin: 1.4rem;
		border-radius: 1.4rem 1.4rem 0.0rem 0.0rem;
		transition: min-height 300ms ease-in-out, margin 300ms ease-in-out, border-radius 300ms ease-in-out;
	}

	main {
		display: flex;
		flex-direction: row;
		min-height: 100vh;
		padding-top: 4.5rem;
	}
</style>