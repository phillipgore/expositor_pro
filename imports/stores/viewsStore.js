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
            {componentId: 'new', componentType: 'SheetPushButton', componentDevice: 'phone'},
            {componentId: 'open', componentType: 'SheetPushButton', componentDevice: 'phone'},
            {componentType: 'HorizontalSpace', componentDevice: 'phone'},
            {componentId: 'newInner', componentType: 'SheetPushButton', componentDevice: 'phone'},
            {componentId: 'newOuter', componentType: 'SheetPushButton', componentDevice: 'phone'},
            {componentType: 'HorizontalSpace', componentDevice: 'phone'},
            {componentId: 'newCompare', componentType: 'SheetPushButton', componentDevice: 'phone'},
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
            {componentId: 'outlineScrollView', componentType: 'ScrollView'},
            {componentId: 'textScrollView', componentType: 'ScrollView'},
            {componentId: 'literaryScrollView', componentType: 'ScrollView'},
            {componentId: 'colorScrollView', componentType: 'ScrollView'},
        ],
    },
    {
        _id: 'outlineScrollView',
        componentType: 'ScrollView',
        isActive: true,
        components: [
            {componentId: 'section', componentType: 'SheetPushButton', componentDevice: 'phone'},
            {componentId: 'column', componentType: 'SheetPushButton', componentDevice: 'phone'},
            {componentId: 'group', componentType: 'SheetPushButton', componentDevice: 'phone'},
            {componentType: 'HorizontalSpace', componentDevice: 'phone'},
            {componentId: 'unpin', componentType: 'SheetPushButton', componentDevice: 'phone'},
            {componentId: 'pin', componentType: 'SheetPushButton', componentDevice: 'phone'},
        ]
    },
    {
        _id: 'textScrollView',
        componentType: 'ScrollView',
        isActive: false,
        components: [
            {componentId: 'highlight', componentType: 'SheetPushButton', componentDevice: 'phone'},
            {componentType: 'HorizontalSpace', componentDevice: 'phone'},
            {componentId: 'split', componentType: 'SheetPushButton', componentDevice: 'phone'},
            {componentId: 'join', componentType: 'SheetPushButton', componentDevice: 'phone'},
            {componentType: 'HorizontalSpace', componentDevice: 'phone'},
            {componentId: 'moveUp', componentType: 'SheetPushButton', componentDevice: 'phone'},
            {componentId: 'moveDown', componentType: 'SheetPushButton', componentDevice: 'phone'}, 
        ]
    },
    {
        _id: 'literaryScrollView',
        componentType: 'ScrollView',
        isActive: false,
        components: [
            {componentId: 'chiasim', componentType: 'SheetPushButton', componentDevice: 'phone'},
            {componentId: 'paralellism', componentType: 'SheetPushButton', componentDevice: 'phone'},
            {componentId: 'repetition', componentType: 'SheetPushButton', componentDevice: 'phone'},
            {componentId: 'intensification', componentType: 'SheetPushButton', componentDevice: 'phone'},
        ]
    },
    {
        _id: 'colorScrollView',
        componentType: 'ScrollView',
        isActive: false,
        components: [
            {componentId: 'red', componentType: 'SheetPushButton', componentDevice: 'phone'},
            {componentId: 'orange', componentType: 'SheetPushButton', componentDevice: 'phone'},
            {componentId: 'yellow', componentType: 'SheetPushButton', componentDevice: 'phone'},
            {componentId: 'green', componentType: 'SheetPushButton', componentDevice: 'phone'},
            {componentId: 'aqua', componentType: 'SheetPushButton', componentDevice: 'phone'},
            {componentId: 'blue', componentType: 'SheetPushButton', componentDevice: 'phone'},
            {componentId: 'purple', componentType: 'SheetPushButton', componentDevice: 'phone'},
            {componentId: 'pink', componentType: 'SheetPushButton', componentDevice: 'phone'},
        ]
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
            {componentId: 'structure', componentType: 'SheetPushButton', componentDevice: 'phone'},
            {componentId: 'document', componentType: 'SheetPushButton', componentDevice: 'phone'},
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
            {componentId: 'references', componentType: 'SheetPushButton', componentDevice: 'phone'},
            {componentId: 'footnotes', componentType: 'SheetPushButton', componentDevice: 'phone'},
            {componentId: 'verses', componentType: 'SheetPushButton', componentDevice: 'phone'},
            {componentId: 'headings', componentType: 'SheetPushButton', componentDevice: 'phone'},
            {componentType: 'HorizontalSpace', componentDevice: 'phone'},
            {componentId: 'account', componentType: 'SheetPushButton', componentDevice: 'phone'},
            {componentId: 'toolbar', componentType: 'SheetPushButton', componentDevice: 'phone'},
            {componentId: 'help', componentType: 'SheetPushButton', componentDevice: 'phone'},
            {componentType: 'HorizontalSpace', componentDevice: 'phone'},
            {componentId: 'signout', componentType: 'SheetPushButton', componentDevice: 'phone'},
        ],
    },
]);

export const viewsState = writable({});