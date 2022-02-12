import {readable, writable} from 'svelte/store';

export const toolbarsSetup = readable([
    {
        _id: 'mainToolbar',
        components: [
            {componentId: 'studies', componentType: 'PullDownButton'},
            {componentId: 'zoom', componentType: 'PullDownButton'},
            {componentType: 'FlexibleSpace'},
            {componentId: 'outline', componentType: 'PullDownButton'},
            {componentId: 'text', componentType: 'PullDownButton'},
            {componentId: 'literary', componentType: 'PullDownButton'},
            {componentType: 'Space'},
            {componentId: 'color', componentType: 'PullDownButton'},
            {componentId: 'note', componentType: 'PushButton'},
            {componentId: 'options', componentType: 'PullDownButton'},
            {componentType: 'Space'},
            {componentId: 'delete', componentType: 'PushButton'},
            {componentType: 'FlexibleSpace'},
            {componentId: 'view', componentType: 'SegmentedControl'},
            {componentType: 'Space'},
            {componentId: 'settings', componentType: 'PullDownButton'},
        ],
    }
]);

export const toolbarsState = writable({});