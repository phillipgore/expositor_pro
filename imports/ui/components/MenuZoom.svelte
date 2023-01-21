<script>
    import Menu from "../elements/Menu.svelte";
    import ButtonGrouped from "../elements/ButtonGrouped.svelte";
    import Button from "../elements/Button.svelte";
    import DividerHorizontal from "../elements/DividerHorizontal.svelte";
    import {buttonState} from '../../stores/store.js';

    let menuId = 'menuZoom'
    let groupId = "zoomGroup";

    let clicked = (buttonLabel) => {
        Object.keys($buttonState).forEach(key => {
            if ($buttonState[key].menuId === menuId) {
                $buttonState[key].label = buttonLabel;
            }
        });
    }
</script>

<Menu _id={menuId}>
    <ButtonGrouped isList >
        <Button
            groupId
            color="system-menu"
            label="25%"
            icon="blank"
            iconActive="check"
            labelIsLeft
            isFullWidth
            on:buttonClick="{() => clicked('25%')}"
        />
        <Button
            groupId
            color="system-menu"
            label="50%"
            icon="blank"
            iconActive="check"
            labelIsLeft
            isFullWidth
            on:buttonClick="{() => clicked('50%')}"
        />
        <Button
            groupId
            color="system-menu"
            label="75%"
            icon="blank"
            iconActive="check"
            labelIsLeft
            isFullWidth
            on:buttonClick="{() => clicked('75%')}"
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
            on:buttonClick="{() => clicked('100%')}"
        />
        <Button
            groupId
            color="system-menu"
            label="125%"
            icon="blank"
            iconActive="check"
            labelIsLeft
            isFullWidth
            on:buttonClick="{() => clicked('125%')}"
        />
        <Button
            groupId
            color="system-menu"
            label="150%"
            icon="blank"
            iconActive="check"
            labelIsLeft
            isFullWidth
            on:buttonClick="{() => clicked('150%')}"
        />
        <Button
            groupId
            color="system-menu"
            label="200%"
            icon="blank"
            iconActive="check"
            labelIsLeft
            isFullWidth
            on:buttonClick="{() => clicked('200%')}"
        />
        <Button
            groupId
            color="system-menu"
            label="300%"
            icon="blank"
            iconActive="check"
            labelIsLeft
            isFullWidth
            on:buttonClick="{() => clicked('300%')}"
        />
        <Button
            groupId
            color="system-menu"
            label="400%"
            icon="blank"
            iconActive="check"
            labelIsLeft
            isFullWidth
            on:buttonClick="{() => clicked('400%')}"
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
            on:buttonClick="{() => clicked('Fit')}"
        />
    </ButtonGrouped>
</Menu>