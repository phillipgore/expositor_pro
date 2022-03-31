import {readable, writable} from 'svelte/store';

export const selectorsSetup = readable([
    {
        _id: 'view',
        components: [
            {componentId: 'structure'},
            {componentId: 'document'},
        ]
    },
    {
        _id: 'tools',
        components: [
            {componentId: 'outline'},
            {componentId: 'text'},
            {componentId: 'literary'},
            {componentId: 'color'},
        ]
    },
]);

export const selectorsState = writable({});