import {readable, writable} from 'svelte/store';

export const pushButtonsSetup = readable([
    {
        _id: 'notePushButton',
        iconName: 'note', 
        underLabel:'Note', 
        isDisabled: false,
    },
    {
        _id: 'optionsPushButton',
        iconName: 'checkbox-checked', 
        underLabel:'Options', 
        isDisabled: false,
    },
    {
        _id: 'deletePushButton',
        iconName:'delete', 
        underLabel:'Delete', 
        isDisabled: false,
    },
]);

export const pushButtonsState = writable({});