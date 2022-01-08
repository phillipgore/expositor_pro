import {readable, writable} from 'svelte/store';

export let spacingsSetup = readable([
    {_id: 'stretcher'},
    {_id: 'spacer'},
    {_id: 'dividerHorizontal'},
    {_id: 'dividerVertical'}
]);

export const spacingsState = writable({});