import {readable, writable} from 'svelte/store';

export const buttonsSetup = readable([
    // Studies Buttons
    {
        _id: 'studies',
        menuId: 'studiesMenu',
        iconName:'book', 
        underLabel:'Studies', 
        hasSheet: true,
        isActive: false,
        isDisabled: false,
    },

    {
        _id: 'new', 
        iconName: 'plus-circle', 
        label: 'New', 
        shortcut: '<span>&#8984;SN</span>',
        hasPanel: true,
    },
    {
        _id: 'open', 
        iconName: 'arrow-right-circle', 
        label: 'Open', 
        shortcut: '<span>&#8984;SO</span>', 
        hasPanel: true,
    },
    {
        _id: 'newInner', 
        iconName: 'arrow-down-square', 
        label: 'New Inner', 
        shortcut: '<span>&#8984;NI</span>', 
        isDisabled: true,
        hasPanel: true,
    },
    {
        _id: 'newOuter', 
        iconName: 'arrow-up-square',
        label: 'New Outer', 
        shortcut: '<span>&#8984;NO</span>', 
        isDisabled: true,
        hasPanel: true,
    },
    {
        _id: 'newCompare', 
        iconName: 'compare', 
        label: 'New Comparative', 
        shortcut: '<span>&#8984;NC</span>', 
        hasPanel: true,
    },



    // Zoom Buttons
    {
        _id: 'zoom',
        menuId: 'zoomMenu',
        label:'100%',  
        underLabel:'Zoom', 
        hasSheet: false,
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



    // Outline Buttons
    {
        _id: 'outline',
        menuId: 'outlineMenu',
        iconName:'pin', 
        underLabel:'Outline', 
        hasSheet: true,
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
        iconName:'text-join', 
        underLabel:'Text',  
        hasSheet: true,
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
        iconName:'literary-chiasim',  
        underLabel:'Literary', 
        hasSheet: true,
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
        iconName:'paintbrush',  
        underLabel:'Color', 
        hasSheet: true,
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
        iconName: 'note', 
        underLabel:'Note', 
        isDisabled: false,
    },


    
    // Options Button
    {
        _id: 'options',
        iconName: 'checkbox-checked', 
        underLabel:'Options', 
        isDisabled: false,
    },


    
    // Delete Button
    {
        _id: 'delete',
        iconName:'delete', 
        underLabel:'Delete', 
        isDisabled: false,
    },


    
    // Structure Button
    {
        _id: 'structure', 
        groupId: 'view', 
        iconName: 'structure',
        underLabel:'Structure',  
        isSelected: true
    },


    
    // Document Button
    {
        _id: 'document', 
        groupId: 'view', 
        iconName: 'document', 
        underLabel:'Document', 
        isSelected: false
    },


    
    // Settings Buttons
    {
        _id: 'settings',
        menuId: 'settingsMenu',
        iconName:'ellipsis',
        underLabel:'Settings',   
        hasSheet: true,
        isActive: false,
        isDisabled: false,
    },

    {
        _id: 'account', 
        iconName: 'account', 
        label: 'Account', 
        shortcut: '<span>&#8984;SA</span>', 
        hasPanel: true,
    },
    {
        _id: 'toolbar', 
        iconName: 'toolbar', 
        label: 'Toolbar', 
        shortcut: '<span>&#8984;ST</span>', 
        hasPanel: true,
    },
    {
        _id: 'help', 
        iconName: 'help', 
        label: 'Help', 
        shortcut: '<span>&#8984;SH</span>', 
        hasPanel: true,
    },
    {
        _id: 'signout', 
        iconName: 'power', 
        label: 'Sign Out', 
    }, 
]);

export const buttonsState = writable({});