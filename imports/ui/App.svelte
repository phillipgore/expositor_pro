<script>
    import {buttonState, buttonIds, menuState, menuIds} from "../stores/store.js"

	import ToolbarMain from "./components/ToolbarMain.svelte";
    import MenuStudies from "./components/MenuStudies.svelte";
    import MenuZoom from "./components/MenuZoom.svelte";
    import MenuOutline from "./components/MenuOutline.svelte";
    import MenuText from "./components/MenuText.svelte";
    import MenuLiterary from "./components/MenuLiterary.svelte";
    import MenuColor from "./components/MenuColor.svelte";
    import MenuOptions from "./components/MenuOptions.svelte";
    import MenuSettings from "./components/MenuSettings.svelte";
    import MenuBooks from "./components/MenuBooks.svelte";
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
                $menuState[key].menuTop = 0;
                $menuState[key].menuLeft = -100000
                $menuState[key].isActive = false;
            }
        });
    };
</script>

<!-- Window -->
<svelte:window on:click={evaluateClick}/>

<!-- Toolbars -->
<ToolbarMain/>

<div style="padding: 7.5rem 1.8rem 1.8rem">    
    <Button _id="buttonBibleBooks" label="Genesis" isSelect menuId="menuBibleBooks"/>
</div>

<!-- Menus -->
<MenuStudies/>
<MenuZoom/>
<MenuOutline/>
<MenuText/>
<MenuLiterary/>
<MenuColor/>
<MenuOptions/>
<MenuSettings/>
<MenuBooks/>

<!-- Sheets -->
<SheetNew/>