<script>
	import Toolbar from "./components/views/Toolbar.svelte";
</script>

<Toolbar _id={'toolbar'}/>	
<main>
	
</main>
		
<style>
	@media only screen and (min-width: 0px) {
		main {
			display: flex;
			flex-direction: row;
			min-height: 100vh;
			padding-top: 4.5rem;
		}
    }

	@media only screen and (min-width: 768px) {
		main {
			padding: 5.9rem 0.9rem 0.9rem;
		}
	}
</style>