import {readable, writable} from 'svelte/store';

export const segmentedControlsSetup = readable([
    {
        _id: 'view',
        components: [
            {componentId: 'structure'},
            {componentId: 'document'},
        ]
    },
]);

export const segmentedControlsState = writable({});