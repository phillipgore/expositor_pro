import {writable} from 'svelte/store';

export const settingsState = writable({
	toolbarButtons: { hasLabels: true },
	pullDownMenus: { hasArrows: false }
});