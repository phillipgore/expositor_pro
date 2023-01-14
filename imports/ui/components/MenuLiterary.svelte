<script>
    import Menu from "../elements/Menu.svelte";
    import Button from "../elements/Button.svelte";
</script>

<Menu _id='menuLiterary'>
    <Button 
        color="system-menu"
        icon="literary-chiasim"
        label="Chiasim"
        shortcut="<span>&#8984;LC</span>"
        isDisabled
    />
    <Button 
        color="system-menu"
        icon="literary-paralell"
        label="Paralellism"
        shortcut="<span>&#8984;LP</span>"
        isDisabled
    />
    <Button 
        color="system-menu"
        icon="literary-repeat"
        label="Repetition"
        shortcut="<span>&#8984;LR</span>"
        isDisabled
    />
    <Button 
        color="system-menu"
        icon="literary-intensify"
        label="Intensification"
        shortcut="<span>&#8984;LI</span>"
        isDisabled
    />
</Menu>