import {writable} from 'svelte/store';

export const appState = writable({
	baseFontSize: 10,
	toolbarButtons: { hasLabels: true },
	containerIsRecessed: false,
});