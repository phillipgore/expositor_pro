<script>
    import Menu from "../../elements/Menu.svelte";
    import ButtonGrouped from "../../elements/ButtonGrouped.svelte";
    import Button from "../../elements/Button.svelte";
    import DividerHorizontal from "../../elements/DividerHorizontal.svelte";

    const menuId = 'menuZoom'
</script>

<Menu _id={menuId}>
    <ButtonGrouped isList >
        <Button
            groupId="zoomGroup"
            color="system-menu"
            label="25%"
            icon="blank"
            iconActive="check"
            labelIsLeft
            isFullWidth
            activatorId="buttonZoom"
            activatorLabel="25%"
        />
        <Button
            groupId="zoomGroup"
            color="system-menu"
            label="50%"
            icon="blank"
            iconActive="check"
            labelIsLeft
            isFullWidth
            activatorId="buttonZoom"
            activatorLabel="50%"
        />
        <Button
            groupId="zoomGroup"
            color="system-menu"
            label="75%"
            icon="blank"
            iconActive="check"
            labelIsLeft
            isFullWidth
            activatorId="buttonZoom"
            activatorLabel="75%"
        />
        <Button
            groupId="zoomGroup"
            color="system-menu"
            label="100%"
            icon="blank"
            iconActive="check"
            labelIsLeft
            isFullWidth
            isActive
            activatorId="buttonZoom"
            activatorLabel="100%"
        />
        <Button
            groupId="zoomGroup"
            color="system-menu"
            label="125%"
            icon="blank"
            iconActive="check"
            labelIsLeft
            isFullWidth
            activatorId="buttonZoom"
            activatorLabel="125%"
        />
        <Button
            groupId="zoomGroup"
            color="system-menu"
            label="150%"
            icon="blank"
            iconActive="check"
            labelIsLeft
            isFullWidth
            activatorId="buttonZoom"
            activatorLabel="150%"
        />
        <Button
            groupId="zoomGroup"
            color="system-menu"
            label="200%"
            icon="blank"
            iconActive="check"
            labelIsLeft
            isFullWidth
            activatorId="buttonZoom"
            activatorLabel="200%"
        />
        <Button
            groupId="zoomGroup"
            color="system-menu"
            label="300%"
            icon="blank"
            iconActive="check"
            labelIsLeft
            isFullWidth
            activatorId="buttonZoom"
            activatorLabel="300%"
        />
        <Button
            groupId="zoomGroup"
            color="system-menu"
            label="400%"
            icon="blank"
            iconActive="check"
            labelIsLeft
            isFullWidth
            activatorId="buttonZoom"
            activatorLabel="400%"
        />

        <DividerHorizontal/>
        
        <Button
            groupId="zoomGroup"
            color="system-menu"
            label="Fit Width"
            icon="blank"
            iconActive="check"
            labelIsLeft
            isFullWidth
            activatorId="buttonZoom"
            activatorLabel="Fit Width"
        />
    </ButtonGrouped>
</Menu>