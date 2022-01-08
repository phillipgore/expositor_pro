import {readable, writable} from 'svelte/store';

export const toolbarsSetup = readable([
    {
        _id: 'mainToolbar',
        components: [
            {componentId: 'studiesPullDownButton', componentType: 'PullDownButton'},
            {componentId: 'zoomPullDownButton', componentType: 'PullDownButton'},
            {componentId: 'stretcher', componentType: 'Spacing'},
            {componentId: 'outlinePullDownButton', componentType: 'PullDownButton'},
            {componentId: 'textPullDownButton', componentType: 'PullDownButton'},
            {componentId: 'literaryPullDownButton', componentType: 'PullDownButton'},
            {componentId: 'spacer', componentType: 'Spacing'},
            {componentId: 'colorPullDownButton', componentType: 'PullDownButton'},
            {componentId: 'notePushButton', componentType: 'PushButton'},
            {componentId: 'optionsPushButton', componentType: 'PushButton'},
            {componentId: 'spacer', componentType: 'Spacing'},
            {componentId: 'deletePushButton', componentType: 'PushButton'},
            {componentId: 'stretcher', componentType: 'Spacing'},
            {componentId: 'viewSegmentedControl', componentType: 'SegmentedControl'},
            {componentId: 'spacer', componentType: 'Spacing'},
            {componentId: 'settingsPullDownButton', componentType: 'PullDownButton'},
        ],
    }
]);

export const toolbarsState = writable({});