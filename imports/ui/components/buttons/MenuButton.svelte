<script>
    import {buttonsSetup, buttonsState} from '../../../stores/buttonsStore.js';
    import {getIcon} from '../../../stores/iconsStore.js';

    export let _id = _id;
    export let color = 'interface';
    export let isChecked = isChecked;

    let menuButton = $buttonsSetup.find(button => button._id === _id);
</script>

<li class="{color}">
    <button disabled="{menuButton.isDisabled}"> 
        {#if isChecked}
            <div class="icon-container">
                <svg class="icon-left {menuButton.isActive ? '' : 'inactive'}" viewBox="{getIcon('check').viewBox}">
                    <path d={getIcon('check').d}/>
                </svg>
            </div>
        {:else if menuButton.iconName}
            <div class="icon-container">
                <svg class="icon-left" viewBox="{getIcon(menuButton.iconName).viewBox}">
                    <path d={getIcon(menuButton.iconName).d}/>
                </svg>
            </div>
        {/if}
        {#if menuButton.shapeClass}
            <div class="shape-container">
                <div class="{menuButton.shapeClass} {menuButton.shapeColorClass}"></div>
            </div>
        {/if}
        <div class="main-text">{menuButton.label}</div>
        {#if menuButton.shortcut}
            <div class="text-right">{@html menuButton.shortcut}</div>
        {/if}
    </button>
</li>

<style>
    @media only screen and (min-width: 0px) {
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
            margin: 0.0rem 0.0rem 0.4rem;
        }

        li button .main-text {
            white-space: nowrap;
        }

        li button:disabled .main-text {
            color: var(--gray-500)
        }

        li button .text-right {
            text-align: right;
            width: 7.2rem;
            flex-grow: 4;
            display: none;
            color: var(--gray-500)
        }

        .icon-container,
        .shape-container  {
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
            max-width: 1.5rem;
        }

        li button .icon-left.inactive {
            fill: transparent;
        }

        li button:disabled .icon-left {
            fill: var(--gray-500)
        }

        li button .circle {
            height: 1.6rem;
            width: 1.6rem;
            border-radius: 0.8rem;
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
    }

    @media only screen and (min-width: 768px) {
        .pull-down {
            display: flex;
        }

        ul {
            margin: 0.0rem;
        }
        
        li button,
        li button:hover:enabled {
            background: transparent;
            border-radius: 0.3rem;
            font-size: 1.3rem;
            padding: 0.6rem;
            margin: 0.0rem 0.4rem;
        }

        li button:hover:enabled {
            color: var(--white);
            background-color: var(--interface-600);
        }

        li button .main-text {
            white-space: nowrap;
        }

        li button .text-right {
            display: block;
        }

        li button:hover:enabled .text-right {
            color: var(--white);
        }

        li button .icon-container,
        li button .shape-container  {
            height: 1.4rem;
            width: 1.4rem;
        }

        li button .icon-left {
            max-height: 1.2rem;
            max-width: 1.2rem;
        }

        li button:hover:enabled .icon-left {
            fill: var(--white);
        }

        li button:hover:enabled .icon-left.inactive {
            fill: transparent;
        }

        li button .circle {
            height: 1.4rem;
            width: 1.4rem;
            border-radius: 0.7rem;
        }



        /* .toolbar styles */
        li.toolbar button:hover:enabled {
            background-color: var(--interface-blue);
        }



        /* .gray styles */
        li.gray button:hover:enabled {
            background-color: var(--gray);
        }



        /* .red styles */
        li.red button:hover:enabled {
            background-color: var(--red);
        }



        /* .orange styles */
        li.orange button:hover:enabled {
            background-color: var(--orange);
        }



        /* .yellow styles */
        li.yellow button:hover:enabled {
            background-color: var(--yellow);
        }



        /* .green styles */
        li.green button:hover:enabled {
            background-color: var(--green);
        }



        /* .aqua styles */
        li.aqua button:hover:enabled {
            background-color: var(--aqua);
        }



        /* .blue styles */
        li.blue button:hover:enabled {
            background-color: var(--blue);
        }



        /* .purple styles */
        li.purple button:hover:enabled {
            background-color: var(--purple);
        }



        /* .pink styles */
        li.pink button:hover:enabled {
            background-color: var(--pink);
        }

    }
</style>