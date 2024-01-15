<script>
    import Menu from "../../elements/Menu.svelte";
    import Button from "../../elements/Button.svelte";
    import DividerHorizontal from "../../elements/DividerHorizontal.svelte";
</script>

<Menu _id='menuSettings'>
    <Button 
        color="system-menu" 
        icon="account"
        label="Account"
        shortcut="<span>&#8984;SA</span>"  
    />
    <Button 
        color="system-menu" 
        icon="toolbar"
        label="Toolbar"
        shortcut="<span>&#8984;ST</span>"  
    />
    <Button 
        color="system-menu" 
        icon="help"
        label="Help"
        shortcut="<span>&#8984;SH</span>"  
    />

    <DividerHorizontal/>

    <Button 
        color="system-menu" 
        icon="power"
        label="Sign Out"
        labelIsLeft
    />
</Menu>