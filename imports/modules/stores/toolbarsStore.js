import {readable, writable} from 'svelte/store';

export const toolbarsSetup = readable([
    {
        _id: 'mainToolbar',
        components: [
            {componentId: 'studies', componentType: 'PullDownButton'},
            {componentId: 'zoom', componentType: 'PullDownButton'},
            {componentId: 'stretcher', componentType: 'Spacing'},
            {componentId: 'outline', componentType: 'PullDownButton'},
            {componentId: 'text', componentType: 'PullDownButton'},
            {componentId: 'literary', componentType: 'PullDownButton'},
            {componentId: 'spacer', componentType: 'Spacing'},
            {componentId: 'color', componentType: 'PullDownButton'},
            {componentId: 'note', componentType: 'PushButton'},
            {componentId: 'options', componentType: 'PushButton'},
            {componentId: 'spacer', componentType: 'Spacing'},
            {componentId: 'delete', componentType: 'PushButton'},
            {componentId: 'stretcher', componentType: 'Spacing'},
            {componentId: 'view', componentType: 'SegmentedControl'},
            {componentId: 'spacer', componentType: 'Spacing'},
            {componentId: 'settings', componentType: 'PullDownButton'},
        ],
    }
]);

export const toolbarsState = writable({});