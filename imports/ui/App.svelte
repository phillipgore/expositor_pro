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
    import Select from "./elements/Select.svelte";
    import Button from "./elements/Button.svelte";
    import DividerHorizontal from "./elements/DividerHorizontal.svelte";
</script>

<!-- Toolbars -->
<ToolbarMain/>

<div style="padding: 7.5rem 1.8rem 1.8rem">
    <Select>
        <svelte:fragment slot="menuItems">
            <Button
                groupId
                color="system-menu"
                label="25%"
                icon="blank"
                iconActive="check"
                labelIsLeft
                isFullWidth
            />
            <Button
                groupId
                color="system-menu"
                label="50%"
                icon="blank"
                iconActive="check"
                labelIsLeft
                isFullWidth
            />
            <Button
                groupId
                color="system-menu"
                label="75%"
                icon="blank"
                iconActive="check"
                labelIsLeft
                isFullWidth
            />
            <Button
                groupId
                color="system-menu"
                label="100%"
                icon="blank"
                iconActive="check"
                labelIsLeft
                isFullWidth
                isActive
            />
            <Button
                groupId
                color="system-menu"
                label="125%"
                icon="blank"
                iconActive="check"
                labelIsLeft
                isFullWidth
            />
            <Button
                groupId
                color="system-menu"
                label="150%"
                icon="blank"
                iconActive="check"
                labelIsLeft
                isFullWidth
            />
            <Button
                groupId
                color="system-menu"
                label="200%"
                icon="blank"
                iconActive="check"
                labelIsLeft
                isFullWidth
            />
            <Button
                groupId
                color="system-menu"
                label="300%"
                icon="blank"
                iconActive="check"
                labelIsLeft
                isFullWidth
            />
            <Button
                groupId
                color="system-menu"
                label="400%"
                icon="blank"
                iconActive="check"
                labelIsLeft
                isFullWidth
            />

            <DividerHorizontal/>
            
            <Button
                groupId
                color="system-menu"
                label="Fit Width"
                icon="blank"
                iconActive="check"
                labelIsLeft
                isFullWidth
            />
        </svelte:fragment>
    </Select>
    
    <Button label="Button"/>
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

<!-- Sheets -->
<SheetNew/>