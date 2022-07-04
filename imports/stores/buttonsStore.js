import {readable, writable} from 'svelte/store';

export const buttonsSetup = readable([
    // Studies Buttons
    {
        _id: 'studies',
        menuId: 'studiesMenu',
        sheetId: 'studiesSheet',
        iconName:'book', 
        underLabel:'Studies', 
        isActive: false,
        isDisabled: false,
    },

    {
        _id: 'new',
        dialogId: 'newDialog',
        iconName: 'plus-circle', 
        label: 'New', 
        shortcut: '<span>&#8984;SN</span>',
    },
    {
        _id: 'open',
        dialogId: 'openDialog',
        iconName: 'arrow-right-circle', 
        label: 'Open', 
        shortcut: '<span>&#8984;SO</span>', 
    },
    {
        _id: 'newInner',
        dialogId: 'newInnerDialog',
        iconName: 'arrow-down-square', 
        label: 'New Inner', 
        shortcut: '<span>&#8984;NI</span>', 
        isDisabled: true,
    },
    {
        _id: 'newOuter', 
        dialogId: 'newOuterDialog',
        iconName: 'arrow-up-square',
        label: 'New Outer', 
        shortcut: '<span>&#8984;NO</span>', 
        isDisabled: true,
    },
    {
        _id: 'newCompare', 
        dialogId: 'newComparativeDialog',
        iconName: 'compare', 
        label: 'New Comparative', 
        shortcut: '<span>&#8984;NC</span>', 
    },

    {
        _id: 'books',
        menuId: 'booksMenu',
        label: 'Books',
        isActive: false,
        isDisabled: false,
    },



    // Zoom Buttons
    {
        _id: 'zoom',
        menuId: 'zoomMenu',
        label:'100%',  
        underLabel:'Zoom', 
        isActive: false,
        isDisabled: false,
    },

    {_id: '25', label: '25%'},
    {_id: '50', label: '50%'},
    {_id: '75', label: '75%'},
    {_id: '100', label: '100%', isActive: true},
    {_id: '125', label: '125%'},
    {_id: '150', label: '150%'},
    {_id: '200', label: '200%'},
    {_id: '300', label: '300%'},
    {_id: '400', label: '400%'},
    {_id: 'fitWidth', label: 'Fit Width'},
    {_id: 'fitPage', label: 'Fit Page'},



    // Tools Button
    {
        _id: 'tools',
        sheetId: 'toolsSheet',
        iconName:'tools',
        underLabel: 'Tools',
        isActive: false,
        isDisabled: false,
    },



    // Outline Buttons
    {
        _id: 'outline',
        menuId: 'outlineMenu',
        scrollViewId: 'outlineScrollView',
        iconName:'pin', 
        underLabel:'Outline', 
        isSelected: true,
        isActive: false,
        isDisabled: false,
    },

    {
        _id: 'section',
        iconName: 'outline-section', 
        label: 'Section', 
        shortcut: '<span>&#8984;OS</span>',
        isDisabled: true,
    },
    {
        _id: 'column',
        iconName: 'outline-column', 
        label: 'Column', 
        shortcut: '<span>&#8984;OC</span>',
        isDisabled: true,
    },
    {
        _id: 'group',
        iconName: 'outline-group', 
        label: 'Group', 
        shortcut: '<span>&#8984;OG</span>',
        isDisabled: true,
    },
    {
        _id: 'unpin',
        iconName: 'unpin', 
        label: 'Unpin', 
        shortcut: '<span>&#8984;OU</span>',
        isDisabled: true,
    },
    {
        _id: 'pin',
        iconName: 'pin', 
        label: 'Pin', 
        shortcut: '<span>&#8984;OP</span>',
        isDisabled: true,
    },



    // Text Buttons
    {
        _id: 'text',
        menuId: 'textMenu',
        scrollViewId: 'textScrollView',
        iconName:'text-join', 
        underLabel:'Text',  
        isActive: false,
        isDisabled: false,
    },

    {
        _id: 'highlight',
        iconName: 'highlight', 
        label: 'Highlight', 
        shortcut: '<span>&#8984;TH</span>',
        isDisabled: true,
    },
    {
        _id: 'split',
        iconName: 'text-split', 
        label: 'Split', 
        shortcut: '<span>&#8984;TS</span>',
        isDisabled: true,
    },
    {
        _id: 'join',
        iconName: 'text-join', 
        label: 'Join', 
        shortcut: '<span>&#8984;TJ</span>',
        isDisabled: true,
    },
    {
        _id: 'moveUp',
        iconName: 'arrow-up', 
        label: 'Move Up', 
        shortcut: '<span>&#8984;MU</span>',
        isDisabled: true,
    },
    {
        _id: 'moveDown',
        iconName: 'arrow-down', 
        label: 'Move Down', 
        shortcut: '<span>&#8984;MD</span>',
        isDisabled: true,
    },



    // Literary Buttons
    {
        _id: 'literary',
        menuId: 'literaryMenu',
        scrollViewId: 'literaryScrollView',
        iconName:'literary-chiasim',  
        underLabel:'Literary', 
        isActive: false,
        isDisabled: false,
    },

    {
        _id: 'chiasim',
        iconName: 'literary-chiasim', 
        label: 'Chiasim', 
        shortcut: '<span>&#8984;LC</span>',
        isDisabled: true,
    },
    {
        _id: 'paralellism',
        iconName: 'literary-paralell', 
        label: 'Paralellism', 
        shortcut: '<span>&#8984;LP</span>',
        isDisabled: true,
    },
    {
        _id: 'repetition',
        iconName: 'literary-repeat', 
        label: 'Repetition', 
        shortcut: '<span>&#8984;LR</span>',
        isDisabled: true,
    },
    {
        _id: 'intensification',
        iconName: 'literary-intensify', 
        label: 'Intensification', 
        shortcut: '<span>&#8984;LI</span>',
        isDisabled: true,
    },



    // Color Buttons
    {
        _id: 'color',
        menuId: 'colorMenu',
        scrollViewId: 'colorScrollView',
        iconName:'paintbrush',  
        underLabel:'Color', 
        isActive: false,
        isDisabled: false,
    },

    {
        _id: 'red',
        shapeClass: 'circle', 
        shapeColorClass: 'red', 
        label: 'Red',
        isDisabled: true,
    },
    {
        _id: 'orange',
        shapeClass: 'circle', 
        shapeColorClass: 'orange', 
        label: 'Orange',
        isDisabled: true,
    },
    {
        _id: 'yellow',
        shapeClass: 'circle', 
        shapeColorClass: 'yellow', 
        label: 'Yellow',
        isDisabled: true,
    },
    {
        _id: 'green',
        shapeClass: 'circle', 
        shapeColorClass: 'green', 
        label: 'Green',
        isDisabled: true,
    },
    {
        _id: 'aqua',
        shapeClass: 'circle', 
        shapeColorClass: 'aqua', 
        label: 'Aqua',
        isDisabled: true,
    },
    {
        _id: 'blue',
        shapeClass: 'circle', 
        shapeColorClass: 'blue', 
        label: 'Blue',
        isDisabled: true,
    },
    {
        _id: 'purple',
        shapeClass: 'circle', 
        shapeColorClass: 'purple', 
        label: 'Purple',
        isDisabled: true,
    },
    {
        _id: 'pink',
        shapeClass: 'circle', 
        shapeColorClass: 'pink', 
        label: 'Pink',
        isDisabled: true,
    },


    
    // Note Button
    {
        _id: 'note',
        sheetId: 'noteSheet',
        iconName: 'note', 
        underLabel:'Note', 
        isActive: false,
        isDisabled: true,
    },


    
    // Options Buttons
    {
        _id: 'options',
        menuId: 'optionsMenu',
        iconName:'checkbox-checked',  
        underLabel:'Options', 
        isActive: false,
        isDisabled: false,
    },
    {
        _id: 'references',
        label: 'Cross Refrences', 
        shortcut: '<span>&#8984;OR</span>',
        isShowHide: true,
    },
    {
        _id: 'footnotes',
        label: 'Footnotes', 
        shortcut: '<span>&#8984;OF</span>',
        isShowHide: true,
        isActive: true,
    },
    {
        _id: 'verses',
        label: 'Verse Numbers', 
        shortcut: '<span>&#8984;OV</span>',
        isShowHide: true,
    },
    {
        _id: 'headings',
        label: 'Headings', 
        shortcut: '<span>&#8984;OH</span>',
        isShowHide: true,
    },


    
    // Delete Button
    {
        _id: 'delete',
        iconName:'delete', 
        underLabel:'Delete', 
        isDisabled: true,
    },


    
    // View Button
    {
        _id: 'view',
        sheetId: 'viewsSheet',
        iconName:'glasses',
        underLabel:'View',   
        isActive: true,
    },


    
    // Structure Button
    {
        _id: 'structure', 
        label:'Structure', 
        groupId: 'view', 
        iconName: 'structure',
        underLabel:'Structure',  
        isSelected: true
    },


    
    // Document Button
    {
        _id: 'document', 
        label:'Document', 
        groupId: 'view', 
        iconName: 'document', 
        underLabel:'Document', 
        isSelected: false,
    },


    
    // Settings Buttons
    {
        _id: 'settings',
        menuId: 'settingsMenu',
        iconName:'ellipsis',
        underLabel:'Settings',   
        isActive: false,
    },

    {
        _id: 'settingsCircle',
        menuId: 'settingsMenu',
        sheetId: 'settingsSheet',
        iconName:'ellipsis-circle',
        underLabel:'Settings',   
        isActive: false,
    },

    {
        _id: 'account',
        dialogId: 'accountDialog',
        iconName: 'account', 
        label: 'Account', 
        shortcut: '<span>&#8984;SA</span>', 
    },
    {
        _id: 'toolbar',
        dialogId: 'toolbarDialog',
        iconName: 'toolbar', 
        label: 'Toolbar', 
        shortcut: '<span>&#8984;ST</span>', 
    },
    {
        _id: 'help',
        dialogId: 'helpDialog',
        iconName: 'help', 
        label: 'Help', 
        shortcut: '<span>&#8984;SH</span>', 
    },
    {
        _id: 'signout', 
        iconName: 'power', 
        label: 'Sign Out', 
    },


    
    // Standard Buttons
    {
        _id: 'create',
        label:'Create',  
        isActive: false,
        isDisabled: false,
    },
    {
        _id: 'edit',
        label:'Edit',  
        isActive: false,
        isDisabled: false,
    },
    {
        _id: 'save',
        label:'Save',  
        isActive: false,
        isDisabled: false,
    },
    {
        _id: 'update',
        label:'Update',  
        isActive: false,
        isDisabled: false,
    },
    {
        _id: 'cancel',
        label:'Cancel',  
        isActive: false,
        isDisabled: false,
    },
]);

export const buttonsState = writable({});