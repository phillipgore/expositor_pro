import {readable, writable} from 'svelte/store';

export const pullDownButtonsSetup = readable([
    {
        _id: 'studiesPullDownButton',
        menuId: 'studiesMenu',
        iconName:'book', 
        underLabel:'Studies', 
        hasSheet: true,
        isActive: false,
        isDisabled: false,
    },
    {
        _id: 'zoomPullDownButton',
        menuId: 'zoomMenu',
        label:'100%',  
        underLabel:'Zoom', 
        hasSheet: false,
        isActive: false,
        isDisabled: false,
    },
    {
        _id: 'outlinePullDownButton',
        menuId: 'outlineMenu',
        iconName:'pin', 
        underLabel:'Outline', 
        hasSheet: true,
        isActive: false,
        isDisabled: false,
    },
    {
        _id: 'textPullDownButton',
        menuId: 'textMenu',
        iconName:'text-join', 
        underLabel:'Text',  
        hasSheet: true,
        isActive: false,
        isDisabled: false,
    },
    {
        _id: 'literaryPullDownButton',
        menuId: 'literaryMenu',
        iconName:'literary-chiasim',  
        underLabel:'Literary', 
        hasSheet: true,
        isActive: false,
        isDisabled: false,
    },
    {
        _id: 'colorPullDownButton',
        menuId: 'colorMenu',
        iconName:'paintbrush',  
        underLabel:'Color', 
        hasSheet: true,
        isActive: false,
        isDisabled: false,
    },
    {
        _id: 'settingsPullDownButton',
        menuId: 'settingsMenu',
        iconName:'ellipsis',
        underLabel:'Settings',   
        hasSheet: true,
        isActive: false,
        isDisabled: false,
    },
]);

export const pullDownButtonsState = writable({});