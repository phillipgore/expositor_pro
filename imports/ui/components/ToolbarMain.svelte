<script>
    import Toolbar from "../elements/Toolbar.svelte";
    import ButtonUnderLabel from "../elements/ButtonUnderLabel.svelte";
    import SpacerFixed from "../elements/SpaceerFixed.svelte";
    import SpacerFlex from "../elements/SpacerFlex.svelte";
    import ButtonGrouped from "../elements/ButtonGrouped.svelte";
</script>

<Toolbar position="absolute" top="0" right="0" bottom="0" left="0" zIndex="10">
    <ButtonUnderLabel 
        menuId="menuStudies"
        underLabel="Studies" 
        underLabelColor="light" 
        color="system-toolbar"
        hasCaret
        icon="book"
    />
    <ButtonUnderLabel 
        menuId="menuZoom"
        underLabel="Zoom" 
        underLabelColor="light" 
        color="system-toolbar"
        hasCaret
        label="100%"
    />

    <SpacerFlex/>
    
    <ButtonUnderLabel 
        menuId="menuOutline"
        underLabel="Structure" 
        underLabelColor="light" 
        color="system-toolbar"
        hasCaret
        icon="pin"
    />
    <ButtonUnderLabel 
        menuId="menuText"
        underLabel="Text" 
        underLabelColor="light" 
        color="system-toolbar"
        hasCaret
        icon="text-join"
    />
    <ButtonUnderLabel 
        menuId="menuLiterary"
        underLabel="Literary" 
        underLabelColor="light" 
        color="system-toolbar"
        hasCaret
        icon="literary-chiasim"
    />
    <ButtonUnderLabel 
        menuId="menuColor"
        underLabel="Color" 
        underLabelColor="light" 
        color="system-toolbar"
        hasCaret
        icon="paintbrush"
    />

    <SpacerFixed/>

    <ButtonUnderLabel 
        underLabel="Note" 
        underLabelColor="light" 
        color="system-toolbar"
        icon="note"
        isDisabled
    />
    <ButtonUnderLabel 
        menuId="menuOptions"
        underLabel="Options" 
        underLabelColor="light" 
        color="system-toolbar"
        hasCaret
        icon="gear"
    />

    <SpacerFixed/>

    <ButtonUnderLabel 
        underLabel="Delete" 
        underLabelColor="light" 
        color="system-toolbar"
        icon="trashcan"
        isDisabled
    />

    <SpacerFlex/>

    <ButtonGrouped> 
        <ButtonUnderLabel
            groupId="viewGroup"
            color='system-toolbar'
            icon='structure'
            isActive
            underLabel='Analyze'
            underLabelColor='light'
        />
        <ButtonUnderLabel
            groupId="viewGroup"
            color='system-toolbar'
            icon='document'
            underLabel='Document'
            underLabelColor='light'
        />
    </ButtonGrouped>

    <SpacerFixed/>

    <ButtonUnderLabel
        underLabel="Outline" 
        underLabelColor="light" 
        color="system-toolbar"
        icon="outline"
        isToggle
    />

    <SpacerFlex/>

    <ButtonUnderLabel 
        menuId="menuSettings"
        underLabel="Settings" 
        underLabelColor="light" 
        color="system-toolbar"
        hasCaret
        icon="ellipsis"
    />
</Toolbar>