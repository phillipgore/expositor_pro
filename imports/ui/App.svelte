<script>
    import {buttonState, menuState} from "../stores/store.js"

	import ToolbarMain from "./components/ToolbarMain.svelte";
    import MenuStudies from "./components/menus/MenuStudies.svelte";
    import MenuZoom from "./components/menus/MenuZoom.svelte";
    import MenuOutline from "./components/menus/MenuOutline.svelte";
    import MenuText from "./components/menus/MenuText.svelte";
    import MenuLiterary from "./components/menus/MenuLiterary.svelte";
    import MenuColor from "./components/menus/MenuColor.svelte";
    import MenuOptions from "./components/menus/MenuOptions.svelte";
    import MenuSettings from "./components/menus/MenuSettings.svelte";
    import MenuBooks from "./components/menus/MenuBooks.svelte";
    import SheetNew from "./components/SheetNew.svelte";
    import Button from "./elements/Button.svelte";

    const evaluateClick = (event) => {
        if (!event.target.dataset.menuId && event.target.dataset.isMultiSelect === "false" || !event.target.dataset.isMultiSelect) {
            menuReset(undefined, undefined);
        }
    }

    const menuReset = (buttonId, menuId) => {
        Object.keys($buttonState).forEach(key => {
            if (key != buttonId && $buttonState[key].menuId) {
                $buttonState[key].isActive = false;
            }
        });
        
        Object.keys($menuState).forEach(key => {
            if (key != menuId) {
                $menuState[key].menuTop = 'auto';
                $menuState[key].menuBottom = 'auto';
                $menuState[key].menuLeft = -100000
                $menuState[key].isActive = false;
            }
        });
    };
</script>

<!-- Window -->
<svelte:window on:click={evaluateClick} on:resize={() => menuReset(undefined, undefined)}/>

<!-- Toolbars -->
<ToolbarMain/>

    <!-- Toolbar Menus -->
    <MenuStudies/>
    <MenuZoom/>
    <MenuOutline/>
    <MenuText/>
    <MenuLiterary/>
    <MenuColor/>
    <MenuOptions/>
    <MenuSettings/>

<!-- Sheets -->
<SheetNew/>

    <!-- Sheet Menus -->
    <MenuBooks/>