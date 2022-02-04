<script>
	import Toolbar from "./components/views/Toolbar.svelte";
	import PushButton from "./components/buttons/PushButton.svelte";
	import PullDownButton from "./components/buttons/PullDownButton.svelte";
	import PullDownMenu from "./components/buttons/PullDownMenu.svelte";
    import SegmentedControl from "./components/selectors/SegmentedControl.svelte";
    import {menusSetup, menusState} from '../stores/menusStore.js';
</script>

<style>
	@media only screen and (min-width: 0px) {
		main {
			display: flex;
			min-height: 100vh;
			padding-top: 4.5rem;
		}
    }

	@media only screen and (min-width: 768px) {
		main {
			padding-top: 5.0rem;
			padding: 5.6rem 5.6rem 0.0rem;
		}
	}
</style>


<Toolbar _id={'mainToolbar'}/>	
<main>
	<!-- <PullDownButton _id={'studies'}/>
	<PullDownButton _id={'zoom'}/>
	<PullDownButton _id={'outline'}/>
	<PullDownButton _id={'text'}/>
	<PullDownButton _id={'literary'}/>
	<PullDownButton _id={'color'}/>
	<PullDownButton _id={'settings'}/> -->
</main>