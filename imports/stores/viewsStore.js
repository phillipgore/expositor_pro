import {readable, writable} from 'svelte/store';

export const viewsSetup = readable([
    {
        _id: 'mainToolbar',
        componentType: 'Toolbar',
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
        componentType: 'Sheet',
        label: "Studies",
        isFullHeight: true,
        isChecked: false,
        isActive: false,
        components: [
            {componentId: 'new', componentType: 'SheetPushButton'},
            {componentId: 'open', componentType: 'SheetPushButton'},
            {componentId: 'newInner', componentType: 'SheetPushButton'},
            {componentId: 'newOuter', componentType: 'SheetPushButton'},
            {componentId: 'newCompare', componentType: 'SheetPushButton'},
        ],
    },
    {
        _id: 'toolsSheet',
        componentType: 'Sheet',
        label: "Tools",
        isFullHeight: false,
        isChecked: false,
        isActive: false,
        components: [
            {componentId: 'tools', componentType: 'SegmentedControl'},
        ],
    },
    {
        _id: 'noteSheet',
        componentType: 'Sheet',
        label: "Note",
        isFullHeight: false,
        isChecked: false,
        isActive: false,
        components: [
            
        ],
    },
    {
        _id: 'viewsSheet',
        componentType: 'Sheet',
        label: "Views",
        isFullHeight: true,
        isChecked: false,
        isActive: false,
        components: [
            {componentId: 'structure', componentType: 'SheetPushButton'},
            {componentId: 'document', componentType: 'SheetPushButton'},
        ],
    },
    {
        _id: 'settingsSheet',
        componentType: 'Sheet',
        label: "Settings",
        isFullHeight: true,
        isChecked: false,
        isActive: false,
        components: [
            {componentId: 'references', componentType: 'SheetPushButton'},
            {componentId: 'footnotes', componentType: 'SheetPushButton'},
            {componentId: 'verses', componentType: 'SheetPushButton'},
            {componentId: 'headings', componentType: 'SheetPushButton'},

            {componentId: 'account', componentType: 'SheetPushButton'},
            {componentId: 'toolbar', componentType: 'SheetPushButton'},
            {componentId: 'help', componentType: 'SheetPushButton'},
            {componentId: 'signout', componentType: 'SheetPushButton'},
        ],
    },
]);

export const viewsState = writable({});