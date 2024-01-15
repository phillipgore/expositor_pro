<script>
    import Menu from "../../elements/Menu.svelte";
    import Button from "../../elements/Button.svelte";
    import DividerHorizontal from "../../elements/DividerHorizontal.svelte";
</script>

<Menu _id='menuOutline'>
    <Button 
        color="system-menu"
        icon="outline-section"
        label="Section"
        shortcut="<span>&#8984;OS</span>"
        isDisabled
    />
    <Button 
        color="system-menu"
        icon="outline-column"
        label="Column"
        shortcut="<span>&#8984;OC</span>"
        isDisabled
    />
    <Button 
        color="system-menu"
        icon="outline-group"
        label="Group"
        shortcut="<span>&#8984;OG</span>"
        isDisabled
    />

    <DividerHorizontal/>

    <Button 
        color="system-menu"
        icon="unpin"
        label="Unpin"
        shortcut="<span>&#8984;OU</span>"
        isDisabled
    />
    <Button 
        color="system-menu"
        icon="pin"
        label="Pin"
        shortcut="<span>&#8984;OP</span>"
        isDisabled
    />
</Menu>