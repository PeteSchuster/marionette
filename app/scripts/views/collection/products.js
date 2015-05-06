define([
    'backbone'
],
function( Backbone ) {
    'use strict';

    /* Return a ItemView class definition */
    return Backbone.Marionette.CollectionView.extend({

        initialize: function() {
            console.log("initialize a Products CollectionView");
        },


        /* ui selector cache */
        ui: {},

        /* Ui events hash */
        events: {},

        /* on render callback */
        onRender: function() {}
    });

});
