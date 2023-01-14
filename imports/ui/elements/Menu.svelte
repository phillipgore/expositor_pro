<script>
    import { onMount } from 'svelte';
    import {menuState} from '../../stores/store.js';
    
    export let _id;

    let menuHeight;
    let menuWidth;

    $menuState[_id]  = {
        _id: _id,
        isActive: false,
        menuTop: 0,
        menuLeft: -100000,
    };

    onMount(() => {
        $menuState[_id].menuHeight = menuHeight;
        $menuState[_id].menuWidth = menuWidth;
	});
</script>


<div 
    id="{_id}" 
    class="menu {$menuState[_id].isActice? "active": ""}" 
    style="top: {$menuState[_id].menuTop / 10}rem; left: {$menuState[_id].menuLeft / 10}rem" 
    bind:offsetHeight={menuHeight} 
    bind:offsetWidth={menuWidth}
>
    <slot/>
</div>

<style>
    .menu {
        position: absolute;
        z-index: 10;
        border-radius: 0.3rem;
        overflow-x: hidden; 
        overflow-x: auto; 
        padding: 0.3rem;
        box-shadow: 0.0rem 0.0rem 0.7rem var(--black-alpha);
        background-color: var(--gray-800);
        border: 0.1rem solid var(--gray-700);
        display: flex;
        flex-direction: column;
        animation: fadeOut 600ms;
    }

    .active {
        animation: fadeIn 600ms;
    }

    @keyframes fadeOut {
        100% { opacity: 1; }
        0% { opacity: 0; }
    }

    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
</style>