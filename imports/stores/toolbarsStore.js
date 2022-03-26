import {readable, writable} from 'svelte/store';

export const toolbarsSetup = readable([
    {
        _id: 'toolbar',
        components: [
            // Laptop & Tablet
            {componentId: 'studies', componentType: 'PullDownButton', componentDevice: 'laptop tablet'},
            {componentId: 'zoom', componentType: 'PullDownButton', componentDevice: 'laptop tablet'},
            {componentType: 'FlexibleSpace', componentDevice: 'laptop tablet'},
            {componentId: 'outline', componentType: 'PullDownButton', componentDevice: 'laptop tablet'},
            {componentId: 'text', componentType: 'PullDownButton', componentDevice: 'laptop tablet'},
            {componentId: 'literary', componentType: 'PullDownButton', componentDevice: 'laptop tablet'},
            {componentId: 'color', componentType: 'PullDownButton', componentDevice: 'laptop tablet'},
            {componentId: 'note', componentType: 'PushButton', componentDevice: 'laptop tablet'},
            {componentType: 'Space', componentDevice: 'laptop tablet'},
            {componentId: 'delete', componentType: 'PushButton', componentDevice: 'laptop tablet'},
            {componentType: 'FlexibleSpace', componentDevice: 'laptop tablet'},
            {componentId: 'view', componentType: 'SegmentedControl', componentDevice: 'laptop tablet'},
            {componentType: 'Space', componentDevice: 'laptop tablet'},
            {componentId: 'options', componentType: 'PullDownButton', componentDevice: 'laptop tablet'},
            {componentId: 'settings', componentType: 'PullDownButton', componentDevice: 'laptop tablet'},

            // Phone
            {componentId: 'studies', componentType: 'SlideUpButton', componentDevice: 'phone'},
            {componentType: 'FlexibleSpace', componentDevice: 'phone'},
            {componentId: 'tools', componentType: 'SlideUpButton', componentDevice: 'phone'},
            {componentType: 'FlexibleSpace', componentDevice: 'phone'},
            {componentId: 'note', componentType: 'SlideUpButton', componentDevice: 'phone'},
            {componentType: 'FlexibleSpace', componentDevice: 'phone'},
            {componentId: 'delete', componentType: 'SlideUpButton', componentDevice: 'phone'},
            {componentType: 'FlexibleSpace', componentDevice: 'phone'},
            {componentId: 'view', componentType: 'SlideUpButton', componentDevice: 'phone'},
            {componentType: 'FlexibleSpace', componentDevice: 'phone'},
            {componentId: 'settingsCircle', componentType: 'SlideUpButton', componentDevice: 'phone'},
        ],
    }
]);

export const toolbarsState = writable({});