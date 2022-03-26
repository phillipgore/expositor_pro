import {readable, writable} from 'svelte/store';

export const sheetsSetup = readable([
    {
        _id: 'studiesSheet',
        label: "Studies",
        isFullHeight: true,
        isActive: false,
        components: [
            {componentId: 'new', componentType: 'SheetButton'},
            {componentId: 'open', componentType: 'SheetButton'},
            {componentId: 'newInner', componentType: 'SheetButton'},
            {componentId: 'newOuter', componentType: 'SheetButton'},
            {componentId: 'newCompare', componentType: 'SheetButton'},
        ],
    },
    {
        _id: 'toolsSheet',
        label: "Tools",
        isFullHeight: false,
        isActive: false,
        components: [
            {componentId: 'tools', componentType: 'SegmentedControl'},
        ],
    },
    {
        _id: 'noteSheet',
        label: "Note",
        isFullHeight: false,
        isActive: false,
        components: [
            
        ],
    },
    {
        _id: 'viewsSheet',
        label: "Views",
        isFullHeight: true,
        isActive: false,
        components: [
            {componentId: 'structure', componentType: 'SheetButton'},
            {componentId: 'document', componentType: 'SheetButton'},
        ],
    },
    {
        _id: 'settingsSheet',
        label: "Settings",
        isFullHeight: true,
        isActive: false,
        components: [
            {componentId: 'references', componentType: 'SheetButton'},
            {componentId: 'footnotes', componentType: 'SheetButton'},
            {componentId: 'verses', componentType: 'SheetButton'},
            {componentId: 'headings', componentType: 'SheetButton'},

            {componentId: 'account', componentType: 'SheetButton'},
            {componentId: 'toolbar', componentType: 'SheetButton'},
            {componentId: 'help', componentType: 'SheetButton'},
            {componentId: 'signout', componentType: 'SheetButton'},
        ],
    },
]);

export const sheetsState = writable({});