import {readable, writable} from 'svelte/store';

export const pushButtonsSetup = readable([
    {
        _id: 'note',
        iconName: 'note', 
        underLabel:'Note', 
        isDisabled: false,
    },
    {
        _id: 'options',
        iconName: 'checkbox-checked', 
        underLabel:'Options', 
        isDisabled: false,
    },
    {
        _id: 'delete',
        iconName:'delete', 
        underLabel:'Delete', 
        isDisabled: false,
    },
]);

export const pushButtonsState = writable({});