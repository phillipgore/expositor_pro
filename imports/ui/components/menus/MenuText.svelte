<script>
    import Menu from "../../elements/Menu.svelte";
    import Button from "../../elements/Button.svelte";
    import DividerHorizontal from "../../elements/DividerHorizontal.svelte";
</script>

<Menu _id='menuText'>
    <Button 
        color="system-menu"
        icon="highlight"
        label="Highlight"
        shortcut="<span>&#8984;TH</span>"
        isDisabled
    />

    <DividerHorizontal/>

    <Button 
        color="system-menu"
        icon="text-split"
        label="Split"
        shortcut="<span>&#8984;TS</span>"
        isDisabled
    />
    <Button 
        color="system-menu"
        icon="text-join"
        label="Join"
        shortcut="<span>&#8984;TJ</span>"
        isDisabled
    />

    <DividerHorizontal/>

    <Button 
        color="system-menu"
        icon="arrow-up"
        label="Move Up"
        shortcut="<span>&#8984;MU</span>"
        isDisabled
    />
    <Button 
        color="system-menu"
        icon="arrow-down"
        label="Move Down"
        shortcut="<span>&#8984;MD</span>"
        isDisabled
    />
</Menu>