<script>
    import {buttonsSetup, buttonsState} from '../../../stores/buttonsStore.js';
    import {getIcon} from '../../../stores/iconsStore.js';

    export let _id;
    export let color = 'interface';
    export let isChecked;

    let sheetPushButton = $buttonsSetup.find(button => button._id === _id);

</script>

<li class="{color}">
    <button disabled="{sheetPushButton.isDisabled}"> 
        {#if isChecked}
            <div class="icon-container">
                <svg class="icon-left {sheetPushButton.isActive ? '' : 'inactive'}" viewBox="{getIcon('check').viewBox}">
                    <path d={getIcon('check').d}/>
                </svg>
            </div>
        {:else if sheetPushButton.iconName}
            <div class="icon-container">
                <svg class="icon-left" viewBox="{getIcon(sheetPushButton.iconName).viewBox}">
                    <path d={getIcon(sheetPushButton.iconName).d}/>
                </svg>
            </div>
        {/if}
        {#if sheetPushButton.isShowHide}
            <div class="icon-container">
                {#if sheetPushButton.isActive}
                    <svg class="icon-left" viewBox="{getIcon('checkbox-checked').viewBox}">
                        <path d={getIcon('checkbox-checked').d}/>
                    </svg>
                {:else}
                    <svg class="icon-left" viewBox="{getIcon('checkbox-unchecked').viewBox}">
                        <path d={getIcon('checkbox-unchecked').d}/>
                    </svg>
                {/if} 
            </div>
        {/if}
        {#if sheetPushButton.shapeClass}
            <div class="shape-container">
                <div class="{sheetPushButton.shapeClass} {sheetPushButton.shapeColorClass}"></div>
            </div>
        {/if}
        <div class="main-text">
            {sheetPushButton.label}
        </div>
    </button>
</li>

<style>
    li {
        display: flex;
        align-items: center;
        padding: 0.0rem;
        margin: 0.0rem;
        overflow: hidden;
    }

    li button,
    li button:hover:enabled {
        display: flex;
        width: 100%;
        align-items: center;
        color: var(--black);
        background-color: var(--white);
        border: none;
        border-radius: 0.3rem;
        text-decoration: none;
        font-size: 1.6rem;
        padding: 0.9rem 1.5rem;
        margin: 0.2rem 0.0rem;
    }

    li button .main-text {
        white-space: nowrap;
    }

    li button:disabled .main-text {
        color: var(--gray-600)
    }

    li button .text-right {
        text-align: right;
        width: 7.2rem;
        flex-grow: 4;
        color: var(--gray-500)
    }

    li button .icon-container,
    li button .shape-container  {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 1.7rem;
        width: 1.7rem;
        margin-right: 0.6rem;
    }

    li button .icon-left {
        height: 1.7rem;
        fill: var(--gray-300);
        max-height: 1.7rem;
        max-width: 1.7rem;
    }

    li button:disabled .icon-left {
        fill: var(--gray-600)
    }

    li button .icon-left.inactive {
        fill: transparent;
    }

    li button .circle {
        height: 1.4rem;
        width: 1.4rem;
        border-radius: 0.7rem;
        border: solid 0.1rem;
    }

    li button:enabled .circle.red { border-color: var(--red); background-color: var(--red-light); }
    li button:enabled .circle.orange { border-color: var(--orange); background-color: var(--orange-light); }
    li button:enabled .circle.yellow { border-color: var(--yellow); background-color: var(--yellow-light); }
    li button:enabled .circle.green { border-color: var(--green); background-color: var(--green-light); }
    li button:enabled .circle.aqua { border-color: var(--aqua); background-color: var(--aqua-light); }
    li button:enabled .circle.blue { border-color: var(--blue); background-color: var(--blue-light); }
    li button:enabled .circle.purple { border-color: var(--purple); background-color: var(--purple-light); }
    li button:enabled .circle.pink { border-color: var(--pink); background-color: var(--pink-light); }

    li button:disabled .circle.red,
    li button:disabled .circle.orange,
    li button:disabled .circle.yellow,
    li button:disabled .circle.green,
    li button:disabled .circle.aqua,
    li button:disabled .circle.blue,
    li button:disabled .circle.purple,
    li button:disabled .circle.pink { border-color: var(--gray-700); background-color: var(--gray-700); }



    /* --- Color Options --- */
    /* .toolbar styles */
    li.toolbar button {
        color: var(--interface-blue);
    }
    
    /* .gray styles */
    li.gray button {
        color: var(--gray);
    }
    
    /* .red styles */
    li.red button {
        color: var(--red);
    }

    /* .orange styles */
    li.orange button {
        color: var(--orange);
    }
    
    /* .yellow styles */
    li.yellow button {
        color: var(--yellow);
    }
    
    /* .green styles */
    li.green button {
        color: var(--green);
    }
    
    /* .aqua styles */
    li.aqua button {
        color: var(--aqua);
    }
    
    /* .blue styles */
    li.blue button {
        color: var(--blue);
    }
    
    /* .purple styles */
    li.purple button {
        color: var(--purple);
    }

    /* .pink styles */
    li.pink button {
        color: var(--pink);
    }
</style>