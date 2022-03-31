import {readable, writable} from 'svelte/store';

export const viewsSetup = readable([
    {
        _id: 'mainToolbar',
        isHidden: false,
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
            {componentId: 'studies', componentType: 'SlideUpButton', componentDevice: 'phone', hidesToolbarIds: ['mainToolbar']},
            {componentType: 'FlexibleSpace', componentDevice: 'phone'},
            {componentId: 'tools', componentType: 'SlideUpButton', componentDevice: 'phone', hidesToolbarIds: ['mainToolbar']},
            {componentType: 'FlexibleSpace', componentDevice: 'phone'},
            {componentId: 'note', componentType: 'SlideUpButton', componentDevice: 'phone', hidesToolbarIds: ['mainToolbar']},
            {componentType: 'FlexibleSpace', componentDevice: 'phone'},
            {componentId: 'delete', componentType: 'SlideUpButton', componentDevice: 'phone'},
            {componentType: 'FlexibleSpace', componentDevice: 'phone'},
            {componentId: 'view', componentType: 'SlideUpButton', componentDevice: 'phone', hidesToolbarIds: ['mainToolbar']},
            {componentType: 'FlexibleSpace', componentDevice: 'phone'},
            {componentId: 'settingsCircle', componentType: 'SlideUpButton', componentDevice: 'phone', hidesToolbarIds: ['mainToolbar']},
        ],
    },
    {
        _id: 'studiesSheet',
        label: "Studies",
        isFullHeight: true,
        isActive: false,
        components: [
            {componentId: 'new', componentType: 'SheetButton'},
            {componentId: 'open', componentType: 'SheetButton'},
            {componentId: 'newInner', componentType: 'SheetButton'},
            {componentId: 'newOuter', componentType: 'SheetButton'},
            {componentId: 'newCompare', componentType: 'SheetButton'},
        ],
    },
    {
        _id: 'toolsSheet',
        label: "Tools",
        isFullHeight: false,
        isActive: false,
        components: [
            {componentId: 'tools', componentType: 'SegmentedControl'},
        ],
    },
    {
        _id: 'noteSheet',
        label: "Note",
        isFullHeight: false,
        isActive: false,
        components: [
            
        ],
    },
    {
        _id: 'viewsSheet',
        label: "Views",
        isFullHeight: true,
        isActive: false,
        components: [
            {componentId: 'structure', componentType: 'SheetButton'},
            {componentId: 'document', componentType: 'SheetButton'},
        ],
    },
    {
        _id: 'settingsSheet',
        label: "Settings",
        isFullHeight: true,
        isActive: false,
        components: [
            {componentId: 'references', componentType: 'SheetButton'},
            {componentId: 'footnotes', componentType: 'SheetButton'},
            {componentId: 'verses', componentType: 'SheetButton'},
            {componentId: 'headings', componentType: 'SheetButton'},

            {componentId: 'account', componentType: 'SheetButton'},
            {componentId: 'toolbar', componentType: 'SheetButton'},
            {componentId: 'help', componentType: 'SheetButton'},
            {componentId: 'signout', componentType: 'SheetButton'},
        ],
    },
]);

export const viewsState = writable({});