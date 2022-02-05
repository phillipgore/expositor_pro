import {writable} from 'svelte/store';

export const settingsState = writable({
	baseFontSize: 10,
	toolbarButtons: { hasLabels: true },
});