<script>
    import Menu from "../../elements/Menu.svelte";
    import ButtonGrouped from "../../elements/ButtonGrouped.svelte";
    import Button from "../../elements/Button.svelte";
    import {getOTBooks, getNTBooks} from '../../../stores/bible.js';
    import DividerHorizontal from '../../elements/DividerHorizontal.svelte';

    const menuId = 'menuBibleBooks'
</script>

<Menu _id={menuId}>
    <ButtonGrouped isList >
        {#each getOTBooks as book}
            <Button
                groupId="bibleBooksGroup"
                color="system-menu"
                label={book.title}
                icon={"blank"}
                iconActive="check"
                labelIsLeft
                isFullWidth
                activatorId="buttonBibleBooks"
                activatorLabel={book.title}
                isActive={book.title === "Revelation"? true: false}
            />
        {/each}
        <DividerHorizontal/>
        {#each getNTBooks as book}
            <Button
                groupId="bibleBooksGroup"
                color="system-menu"
                label={book.title}
                icon={"blank"}
                iconActive="check"
                labelIsLeft
                isFullWidth
                activatorId="buttonBibleBooks"
                activatorLabel={book.title}
                isActive={book.title === "Revelation"? true: false}
            />
        {/each}
    </ButtonGrouped>
</Menu>