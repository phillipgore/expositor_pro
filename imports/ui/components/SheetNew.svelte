<script>
    import Sheet from "../elements/Sheet.svelte";
    import Toolbar from "../elements/Toolbar.svelte";
    import Box from "../elements/Box.svelte";
    import SpacerFlex from "../elements/SpacerFlex.svelte";
    import Button from "../elements/Button.svelte";
</script>

<Sheet _id='sheetNew'>
    <Box title="New Study" backgroundColor="gray" hasBorderTop hasBorderBottom></Box>
    <Toolbar color="white">
        <SpacerFlex/>

        <Button 
            color="system-gray" 
            label="Cancel"
            sheetId="sheetNew"
        /> 
        
        <Button 
            color="system-blue" 
            label="Create"
        />
    </Toolbar>
</Sheet>
