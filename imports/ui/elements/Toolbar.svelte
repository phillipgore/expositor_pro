<script>
    export let color = 'system-toolbar';
    export let position = 'static';
    export let top = 'auto';
    export let right = 'auto';
    export let bottom = 'auto';
    export let left = 'auto';
    export let zIndex = 'auto';
    export let hasBorderTop = false;
    export let hasBorderBottom = false;
</script>

<nav class="{color} {hasBorderTop? "border-top" : ""} {hasBorderBottom? "border-bottom" : ""}" style:position style:top style:right style:bottom style:left z-index="{zIndex}">
    <slot/>
</nav>

<style>
    nav {
        display: flex;
        align-items: center;
        margin: 0.0rem;
        padding: 0.0rem 0.9rem;
        height: 5.0rem;
        min-height: 5.0rem;
    }

    nav.border-top {
        border-top: 0.1rem solid;
    }

    nav.border-bottom {
        border-bottom: 0.1rem solid;
    }

    nav.system-toolbar {
        background-color: var(--gray-200);
        color: var(--white);
        border-color: var(--black);
    }

    nav.white {
        background-color: var(--white);
        color: var(--gray-200);
        border-color: var(--gray-700);
    }
</style>