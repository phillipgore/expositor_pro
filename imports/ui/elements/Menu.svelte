<script>
    import { onMount } from 'svelte';
    import {menuState} from '../../stores/store.js';
    
    export let _id;
    export let zIndex = 10;

    let menu;
    let menuHeight;
    let menuWidth;

    $menuState[_id]  = {
        _id: _id,
        isActive: false,
        menuTop: 'auto',
        menuLeft: -100000,
        menuBottom: 'auto',
        menuTopMax: 6,
        menuBottomMax: 6,
    };

    onMount(() => {
        $menuState[_id].menuHeight = menuHeight;
        $menuState[_id].menuWidth = menuWidth;
	});

    let handleScroll = () => {
        let menuPosition = menu.getBoundingClientRect();
        if ($menuState[_id].menuTop > $menuState[_id].menuTopMax) {
            let newMenuTop = $menuState[_id].menuTop - menu.scrollTop
            $menuState[_id].menuTop = newMenuTop < $menuState[_id].menuTopMax? $menuState[_id].menuTopMax : newMenuTop;
        }
    }
</script>


<div 
    id="{_id}" 
    class="menu {$menuState[_id].isActice? "active": ""}" 
    style="top: {$menuState[_id].menuTop === 'auto'? 'auto' : $menuState[_id].menuTop / 10}rem; bottom: {$menuState[_id].menuBottom === 'auto'? 'auto' : $menuState[_id].menuBottom / 10}rem; left: {$menuState[_id].menuLeft / 10}rem; z-index: {zIndex}" 
    bind:offsetHeight={menuHeight} 
    bind:offsetWidth={menuWidth}
    bind:this={menu}
    on:scroll={handleScroll}
>
    <slot/>
</div>

<style>
    .menu {
        position: absolute;
        border-radius: 0.3rem;
        overflow-y: scroll; 
        padding: 0.3rem;
        box-shadow: 0.0rem 0.0rem 0.7rem var(--black-alpha);
        background-color: var(--gray-800);
        border: 0.1rem solid var(--gray-700);
        display: flex;
        flex-direction: column;
        animation: fadeOut 600ms;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    .menu::-webkit-scrollbar {
        display: none;
    }
</style>