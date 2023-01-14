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
    import SheetNew from "./components/SheetNew.svelte";
</script>

<!-- Toolbars -->
<ToolbarMain/>

<!-- Menus -->
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