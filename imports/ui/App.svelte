<script>
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
</script>

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