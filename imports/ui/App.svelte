<script>
	import Toolbar from "./components/Toolbar.svelte";
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
		}
	}
</style>


<Toolbar _id={'mainToolbar'}/>	
<main></main>