import { Meteor } from 'meteor/meteor';

Meteor.startup(async () => {
    WebApp.addHtmlAttributeHook(() => ({ lang: 'en' }));
});
