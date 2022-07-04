import {readable, writable} from 'svelte/store';

export const viewsSetup = readable([
    // App Toolbar
    {
        _id: 'mainToolbar',
        componentType: 'Toolbar',
        isHidden: false,
        components: [
            // Laptop & Tablet
            {componentId: 'studies', componentType: 'PullDownButton', componentDevice: 'laptop tablet', componentClass: 'toolbar'},
            {componentId: 'zoom', componentType: 'PullDownButton', componentDevice: 'laptop tablet', componentClass: 'toolbar'},
            {componentType: 'FlexibleSpace', componentDevice: 'laptop tablet'},
            {componentId: 'outline', componentType: 'PullDownButton', componentDevice: 'laptop tablet', componentClass: 'toolbar'},
            {componentId: 'text', componentType: 'PullDownButton', componentDevice: 'laptop tablet', componentClass: 'toolbar'},
            {componentId: 'literary', componentType: 'PullDownButton', componentDevice: 'laptop tablet', componentClass: 'toolbar'},
            {componentId: 'color', componentType: 'PullDownButton', componentDevice: 'laptop tablet', componentClass: 'toolbar'},
            {componentType: 'Space', componentDevice: 'laptop tablet'},
            {componentId: 'note', componentType: 'PushButton', componentDevice: 'laptop tablet', componentClass: 'toolbar'},
            {componentId: 'options', componentType: 'PullDownButton', componentDevice: 'laptop tablet', componentClass: 'toolbar'},
            {componentType: 'Space', componentDevice: 'laptop tablet'},
            {componentId: 'delete', componentType: 'PushButton', componentDevice: 'laptop tablet', componentClass: 'toolbar'},
            {componentType: 'FlexibleSpace', componentDevice: 'laptop tablet'},
            {componentId: 'view', componentType: 'SegmentedControl', componentDevice: 'laptop tablet', componentClass: 'toolbar'},
            {componentType: 'Space', componentDevice: 'laptop tablet'},
            {componentId: 'settings', componentType: 'PullDownButton', componentDevice: 'laptop tablet', componentClass: 'toolbar'},

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

    // Sheets
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

    // Scrollviews
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
    
    // Dialogs
    {
        _id: 'newDialog',
        componentType: 'Dialog',
        label: "New Study",
        isActive: false,
        components: [
            {componentId: 'newToolbar', componentType: 'Toolbar', componentDevice: 'laptop tablet', componentClass: 'white'},
            {componentId: 'newBottomToolbar', componentType: 'Toolbar', componentDevice: 'laptop tablet', componentClass: 'white bottom'},
        ],
    },
    {
        _id: 'openDialog',
        componentType: 'Dialog',
        label: "Open Existing Study",
        isActive: false,
        components: [
            {componentId: 'openToolbar', componentType: 'Toolbar', componentDevice: 'laptop tablet', componentClass: 'white'},
            {componentId: 'openBottomToolbar', componentType: 'Toolbar', componentDevice: 'laptop tablet', componentClass: 'white bottom'},
        ],
    },
    {
        _id: 'newInnerDialog',
        componentType: 'Dialog',
        label: "New Inner Study",
        isActive: false,
        components: [
            {componentId: 'newInnerToolbar', componentType: 'Toolbar', componentDevice: 'laptop tablet', componentClass: 'white'},
            {componentId: 'newInnerBottomToolbar', componentType: 'Toolbar', componentDevice: 'laptop tablet', componentClass: 'white bottom'},
        ],
    },
    {
        _id: 'newOuterDialog',
        componentType: 'Dialog',
        label: "New Outer Study",
        isActive: false,
        components: [
            {componentId: 'newOuterToolbar', componentType: 'Toolbar', componentDevice: 'laptop tablet', componentClass: 'white'},
            {componentId: 'newOuterBottomToolbar', componentType: 'Toolbar', componentDevice: 'laptop tablet', componentClass: 'white bottom'},
        ],
    },
    {
        _id: 'newComparativeDialog',
        componentType: 'Dialog',
        label: "New Comparative Study",
        isActive: false,
        components: [
            {componentId: 'newComparativeToolbar', componentType: 'Toolbar', componentDevice: 'laptop tablet', componentClass: 'white'},
            {componentId: 'newComparativeBottomToolbar', componentType: 'Toolbar', componentDevice: 'laptop tablet', componentClass: 'white bottom'},
        ],
    },
    {
        _id: 'accountDialog',
        componentType: 'Dialog',
        label: "Account",
        isActive: false,
        components: [
            {componentId: 'accountToolbar', componentType: 'Toolbar', componentDevice: 'laptop tablet', componentClass: 'white'},
            {componentId: 'accountBottomToolbar', componentType: 'Toolbar', componentDevice: 'laptop tablet', componentClass: 'white bottom'},
        ],
    },
    {
        _id: 'toolbarDialog',
        componentType: 'Dialog',
        label: "Toolbar",
        isActive: false,
        components: [
            {componentId: 'toolbarToolbar', componentType: 'Toolbar', componentDevice: 'laptop tablet', componentClass: 'white'},
            {componentId: 'toolbarBottomToolbar', componentType: 'Toolbar', componentDevice: 'laptop tablet', componentClass: 'white bottom'},
        ],
    },
    {
        _id: 'helpDialog',
        componentType: 'Dialog',
        label: "Help",
        isActive: false,
        components: [
            {componentId: 'helpToolbar', componentType: 'Toolbar', componentDevice: 'laptop tablet', componentClass: 'white'},
            {componentId: 'helpBottomToolbar', componentType: 'Toolbar', componentDevice: 'laptop tablet', componentClass: 'white bottom'},
        ],
    },

    // Dialog Toolbars
    {
        _id: 'newToolbar',
        componentType: 'Toolbar',
        isHidden: false,
        components: [
            {componentId: 'newHeading', componentType: 'Heading', componentDevice: 'laptop tablet'},
        ],
    },
    {
        _id: 'openToolbar',
        componentType: 'Toolbar',
        isHidden: false,
        components: [
            {componentId: 'openHeading', componentType: 'Heading', componentDevice: 'laptop tablet'},
        ],
    },
    {
        _id: 'newInnerToolbar',
        componentType: 'Toolbar',
        isHidden: false,
        components: [
            {componentId: 'newInnerHeading', componentType: 'Heading', componentDevice: 'laptop tablet'},
        ],
    },
    {
        _id: 'newOuterToolbar',
        componentType: 'Toolbar',
        isHidden: false,
        components: [
            {componentId: 'newOuterHeading', componentType: 'Heading', componentDevice: 'laptop tablet'},
        ],
    },
    {
        _id: 'newComparativeToolbar',
        componentType: 'Toolbar',
        isHidden: false,
        components: [
            {componentId: 'newComparativeHeading', componentType: 'Heading', componentDevice: 'laptop tablet'},
        ],
    },
    {
        _id: 'accountToolbar',
        componentType: 'Toolbar',
        isHidden: false,
        components: [
            {componentId: 'accountHeading', componentType: 'Heading', componentDevice: 'laptop tablet'},
        ],
    },
    {
        _id: 'toolbarToolbar',
        componentType: 'Toolbar',
        isHidden: false,
        components: [
            {componentId: 'toolbarHeading', componentType: 'Heading', componentDevice: 'laptop tablet'},
        ],
    },
    {
        _id: 'helpToolbar',
        componentType: 'Toolbar',
        isHidden: false,
        components: [
            {componentId: 'helpHeading', componentType: 'Heading', componentDevice: 'laptop tablet'},
        ],
    },
    {
        _id: 'newBottomToolbar',
        componentType: 'Toolbar',
        isHidden: false,
        components: [
            {componentType: 'FlexibleSpace', componentDevice: 'laptop tablet'},
            {componentId: 'cancel', componentType: 'PushButton', componentDevice: 'laptop tablet', targetId: 'newDialog', targetType: 'Dialog', targetKey: 'isActive', targetValue: false},
            {componentId: 'create', componentType: 'PushButton', componentDevice: 'laptop tablet', componentClass: 'blue'},
        ],
    },
    {
        _id: 'openBottomToolbar',
        componentType: 'Toolbar',
        isHidden: false,
        components: [
            {componentType: 'FlexibleSpace', componentDevice: 'laptop tablet'},
            {componentId: 'cancel', componentType: 'PushButton', componentDevice: 'laptop tablet', targetId: 'openDialog', targetType: 'Dialog', targetKey: 'isActive', targetValue: false},
            {componentId: 'create', componentType: 'PushButton', componentDevice: 'laptop tablet', componentClass: 'blue'},
        ],
    },
    {
        _id: 'newInnerBottomToolbar',
        componentType: 'Toolbar',
        isHidden: false,
        components: [
            {componentType: 'FlexibleSpace', componentDevice: 'laptop tablet'},
            {componentId: 'cancel', componentType: 'PushButton', componentDevice: 'laptop tablet', targetId: 'newInnerDialog', targetType: 'Dialog', targetKey: 'isActive', targetValue: false},
            {componentId: 'create', componentType: 'PushButton', componentDevice: 'laptop tablet', componentClass: 'blue'},
        ],
    },
    {
        _id: 'newOuterBottomToolbar',
        componentType: 'Toolbar',
        isHidden: false,
        components: [
            {componentType: 'FlexibleSpace', componentDevice: 'laptop tablet'},
            {componentId: 'cancel', componentType: 'PushButton', componentDevice: 'laptop tablet', targetId: 'newOuterDialog', targetType: 'Dialog', targetKey: 'isActive', targetValue: false},
            {componentId: 'create', componentType: 'PushButton', componentDevice: 'laptop tablet', componentClass: 'blue'},
        ],
    },
    {
        _id: 'newComparativeBottomToolbar',
        componentType: 'Toolbar',
        isHidden: false,
        components: [
            {componentType: 'FlexibleSpace', componentDevice: 'laptop tablet'},
            {componentId: 'cancel', componentType: 'PushButton', componentDevice: 'laptop tablet', targetId: 'newComparativeDialog', targetType: 'Dialog', targetKey: 'isActive', targetValue: false},
            {componentId: 'create', componentType: 'PushButton', componentDevice: 'laptop tablet', componentClass: 'blue'},
        ],
    },
    {
        _id: 'accountBottomToolbar',
        componentType: 'Toolbar',
        isHidden: false,
        components: [
            {componentType: 'FlexibleSpace', componentDevice: 'laptop tablet'},
            {componentId: 'cancel', componentType: 'PushButton', componentDevice: 'laptop tablet', targetId: 'accountDialog', targetType: 'Dialog', targetKey: 'isActive', targetValue: false},
            {componentId: 'create', componentType: 'PushButton', componentDevice: 'laptop tablet', componentClass: 'blue'},
        ],
    },
    {
        _id: 'toolbarBottomToolbar',
        componentType: 'Toolbar',
        isHidden: false,
        components: [
            {componentType: 'FlexibleSpace', componentDevice: 'laptop tablet'},
            {componentId: 'cancel', componentType: 'PushButton', componentDevice: 'laptop tablet', targetId: 'toolbarDialog', targetType: 'Dialog', targetKey: 'isActive', targetValue: false},
            {componentId: 'create', componentType: 'PushButton', componentDevice: 'laptop tablet', componentClass: 'blue'},
        ],
    },
    {
        _id: 'helpBottomToolbar',
        componentType: 'Toolbar',
        isHidden: false,
        components: [
            {componentType: 'FlexibleSpace', componentDevice: 'laptop tablet'},
            {componentId: 'cancel', componentType: 'PushButton', componentDevice: 'laptop tablet', targetId: 'helpDialog', targetType: 'Dialog', targetKey: 'isActive', targetValue: false},
            {componentId: 'create', componentType: 'PushButton', componentDevice: 'laptop tablet', componentClass: 'blue'},
        ],
    },

    // Headings
    {
        _id: 'newHeading',
        componentType: 'Heading',
        heading: "New Study",
        headingLevel: "h4",
    },
    {
        _id: 'openHeading',
        componentType: 'Heading',
        heading: "Open Existing Study",
        headingLevel: "h4",
    },
    {
        _id: 'newInnerHeading',
        componentType: 'Heading',
        heading: "New Inner Study",
        headingLevel: "h4",
    },
    {
        _id: 'newOuterHeading',
        componentType: 'Heading',
        heading: "New Outer Study",
        headingLevel: "h4",
    },
    {
        _id: 'newComparativeHeading',
        componentType: 'Heading',
        heading: "New Comparative Study",
        headingLevel: "h4",
    },
    {
        _id: 'accountHeading',
        componentType: 'Heading',
        heading: "Account",
        headingLevel: "h4",
    },
    {
        _id: 'toolbarHeading',
        componentType: 'Heading',
        heading: "Toolbar",
        headingLevel: "h4",
    },
    {
        _id: 'helpHeading',
        componentType: 'Heading',
        heading: "Help",
        headingLevel: "h4",
    },
]);

export const viewsState = writable({});