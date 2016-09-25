var SPA = require('spa-jquery');
var Component = SPA.Component;
var State = SPA.State;

Component.define('Main', {
    testMember: 'test member',

    testMethod: function (param) {
        console.log('test method is just called!');
        console.log(param);
    },

    events: {
        click: {
            '.btn-test': function (e) {
                this.testMethod('btn clicked!');
            }
        }
    }
});