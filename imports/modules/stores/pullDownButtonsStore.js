import {readable, writable} from 'svelte/store';

export const pullDownButtonsSetup = readable([
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
        _id: 'zoom',
        menuId: 'zoomMenu',
        label:'100%',  
        underLabel:'Zoom', 
        hasSheet: false,
        isActive: false,
        isDisabled: false,
    },
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
        _id: 'text',
        menuId: 'textMenu',
        iconName:'text-join', 
        underLabel:'Text',  
        hasSheet: true,
        isActive: false,
        isDisabled: false,
    },
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
        _id: 'color',
        menuId: 'colorMenu',
        iconName:'paintbrush',  
        underLabel:'Color', 
        hasSheet: true,
        isActive: false,
        isDisabled: false,
    },
    {
        _id: 'settings',
        menuId: 'settingsMenu',
        iconName:'ellipsis',
        underLabel:'Settings',   
        hasSheet: true,
        isActive: false,
        isDisabled: false,
    },
]);

export const pullDownButtonsState = writable({});