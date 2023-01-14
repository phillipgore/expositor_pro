<script>
    import Menu from "../elements/Menu.svelte";
    import Button from "../elements/Button.svelte";
    import DividerHorizontal from "../elements/DividerHorizontal.svelte";
</script>

<Menu _id='menuStudies'>
    <Button 
        color="system-menu" 
        icon="plus-circle"
        label="New"
        shortcut="<span>&#8984;SN</span>"
        sheetId="sheetNew"
    />
    <Button 
        color="system-menu" 
        icon="arrow-right-circle" 
        label="Open" 
        shortcut="<span>&#8984;SO</span>" 
    />

    <DividerHorizontal/>

    <Button 
        color="system-menu" 
        icon="arrow-down-square" 
        label="New Inner" 
        shortcut="<span>&#8984;NI</span>" 
        isDisabled
    />
    <Button 
        color="system-menu" 
        icon="arrow-up-square"
        label="New Outer" 
        shortcut="<span>&#8984;NO</span>" 
        isDisabled
    />

    <DividerHorizontal/>

    <Button 
        color="system-menu" 
        icon="compare" 
        label="New Comparative" 
        shortcut="<span>&#8984;NC</span>" 
    />
</Menu>