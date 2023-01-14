<script>
    import Menu from "../elements/Menu.svelte";
    import ButtonGrouped from "../elements/ButtonGrouped.svelte";
    import Button from "../elements/Button.svelte";
    import DividerHorizontal from "../elements/DividerHorizontal.svelte";

    let groupId = "zoomGroup";
</script>

<Menu _id='menuZoom'>
    <ButtonGrouped isList >
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
    </ButtonGrouped>
</Menu>