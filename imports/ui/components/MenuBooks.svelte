<script>
    import { get } from 'svelte/store';

    import Menu from "../elements/Menu.svelte";
    import ButtonGrouped from "../elements/ButtonGrouped.svelte";
    import Button from "../elements/Button.svelte";
    import {bible} from '../../stores/bible.js';
  import DividerHorizontal from '../elements/DividerHorizontal.svelte';

    const menuId = 'menuBibleBooks'

    const otBookData = get(bible)[0].testamentData.find(testament => testament._id === 'OT').bookData;
    const ntBookData = get(bible)[0].testamentData.find(testament => testament._id === 'NT').bookData;
</script>

<Menu _id={menuId}>
    <ButtonGrouped isList >
        {#each otBookData as book}
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
                isActive={book.title === "Genesis"? true: false}
            />
        {/each}
        <DividerHorizontal/>
        {#each ntBookData as book}
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
                isActive={book.title === "Genesis"? true: false}
            />
        {/each}
    </ButtonGrouped>
</Menu>