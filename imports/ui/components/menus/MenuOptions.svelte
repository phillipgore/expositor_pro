<script>
    import Menu from "../../elements/Menu.svelte";
    import Button from "../../elements/Button.svelte";
</script>

<Menu _id='menuOptions'>
    <Button 
        color="system-menu"
        label="Cross Refrences"
        icon="checkbox-unchecked"
        iconActive="checkbox-checked"
        shortcut="<span>&#8984;OR</span>"
        isToggle
        isMultiSelect
    />
    <Button 
        color="system-menu"
        label="Footnotes"
        icon="checkbox-unchecked"
        iconActive="checkbox-checked"
        shortcut="<span>&#8984;OF</span>"
        isToggle
        isMultiSelect
    />
    <Button 
        color="system-menu"
        label="Verse Numbers"
        icon="checkbox-unchecked"
        iconActive="checkbox-checked"
        shortcut="<span>&#8984;OV</span>"
        isToggle
        isMultiSelect
    />
    <Button 
        color="system-menu"
        label="Headings"
        icon="checkbox-unchecked"
        iconActive="checkbox-checked"
        shortcut="<span>&#8984;OH</span>"
        isToggle
        isMultiSelect
    />
</Menu>