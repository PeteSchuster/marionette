define([
    'backbone',
    'backbone.marionette',
    'hbs!tmpl/item/product_tmpl'
],
function (Backbone, Marionette, ProductTmpl) {
    'use strict';

    /* Return a ItemView class definition */
    return Backbone.Marionette.ItemView.extend({

        initialize: function () {
            console.log("initialize a Product ItemView");
        },

        template: ProductTmpl,


        /* ui selector cache */
        ui: {},

        /* Ui events hash */
        events: {},

        /* on render callback */
        onRender: function () {
            console.log("render a Product ItemView");
        }
    });

});
