<script>
	import Toolbar from "./components/views/Toolbar.svelte";
	import PullDownMenu from "./components/menus/PullDownMenu.svelte";
	import Sheet from "./components/views/Sheet.svelte";
	import Dialog from "./components/views/Dialog.svelte";

	import {appState} from '../stores/appStore.js';
    import {menusSetup} from '../stores/menusStore.js';
    import {viewsSetup} from '../stores/viewsStore.js';
</script>

<div class="container {$appState.containerIsRecessed ? 'recess' : ''}">
	<Toolbar _id={'mainToolbar'}/>	
</div>

{#each $menusSetup.filter(menu => menu.componentType === 'PullDownMenu') as menu}
	<PullDownMenu _id={menu._id} _class={menu.componentClass}/>
{/each}

{#each $viewsSetup.filter(view => view.componentType === 'Sheet') as sheet}
	<Sheet _id={sheet._id}/>
{/each}

{#each $viewsSetup.filter(view => view.componentType === 'Dialog') as dialog}
	<Dialog _id={dialog._id}/>
{/each}
		
<style>
	@media only screen and (min-width: 0px) {
		.container {
			position: relative;
  			flex-grow: 1;
			background-color: var(--white);
			border-radius: 0.0rem 0.0rem 0.0rem 0.0rem;
			box-shadow: 0.0rem 0.0rem 0.6rem var(--black-alpha);
			transition: min-height 200ms ease-in-out, margin 200ms ease-in-out, border-radius 200ms ease-in-out;
		}

		.container.recess {
			margin: 1.4rem;
			border-radius: 1.4rem 1.4rem 0.0rem 0.0rem;
			transition: min-height 300ms ease-in-out, margin 300ms ease-in-out, border-radius 300ms ease-in-out;
		}
	}
</style>