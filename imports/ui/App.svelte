<script>
	import Toolbar from "./components/views/Toolbar.svelte";
	import PullDownMenu from "./components/menus/PullDownMenu.svelte";
	import Sheet from "./components/views/Sheet.svelte";

	import {settingsState} from '../stores/settingsStore.js';
    import {menusSetup} from '../stores/menusStore.js';
    import {sheetsSetup} from '../stores/sheetsStore.js';
</script>

<div class="wrapper {$settingsState.wrapperIsRecessed ? 'recess' : ''}">
	<Toolbar _id={'mainToolbar'}/>	
	<main></main>
</div>

{#each $menusSetup as menu}
	<PullDownMenu _id={menu._id} color={'blue'}/>
{/each}

{#each $sheetsSetup as sheet}
	<Sheet _id={sheet._id}/>
{/each}
		
<style>
	@media only screen and (min-width: 0px) {
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
			padding-top: 5.0rem;
			padding-right: 1.0rem;
			padding-bottom: 1.0rem;
			padding-left: 1.0rem;
			transition: padding-top 300ms ease-in-out;
		}

		.wrapper.recess main {
			padding-top: 1.2rem;
			transition: padding-top 300ms ease-in-out;
		}
	}

	@media only screen and (min-width: 768px) {
		main {
			padding-top: 5.5rem;
		}
	}
</style>