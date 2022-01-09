import {readable, writable} from 'svelte/store';

export const segmentedControlsSetup = readable([
    {
        _id: 'view',
        segments: [
            {
                _id: 'structure', 
                groupId: 'view', 
                iconName: 'structure',
                underLabel:'Structure',  
                isSelected: true
            },
            {
                _id: 'document', 
                groupId: 'view', 
                iconName: 'document', 
                underLabel:'Document', 
                isSelected: false
            }
        ]
    },
]);

export const segmentedControlsState = writable({});