define([
    'backbone',
    'backbone.marionette'
],
function (Backbone) {
    'use strict';
    var Router = Backbone.Marionette.AppRouter.extend({
        /* Backbone routes hash */
        routes: {
            '': 'processUser'
        },

        processUser: function () {
            
        }
    });

    return new Router();
});
