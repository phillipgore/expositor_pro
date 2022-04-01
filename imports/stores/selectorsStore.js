import {readable, writable} from 'svelte/store';

export const selectorsSetup = readable([
    {
        _id: 'view',
        componentType: 'SegmentedControl',
        components: [
            {componentId: 'structure'},
            {componentId: 'document'},
        ]
    },
    {
        _id: 'tools',
        componentType: 'SegmentedControl',
        components: [
            {componentId: 'outline'},
            {componentId: 'text'},
            {componentId: 'literary'},
            {componentId: 'color'},
        ]
    },
]);

export const selectorsState = writable({});