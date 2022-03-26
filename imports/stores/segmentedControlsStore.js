import {readable, writable} from 'svelte/store';

export const segmentedControlsSetup = readable([
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

export const segmentedControlsState = writable({});