define([
    'backbone',
    'views/item/product',
    'collections/products'
],
function (Backbone, Product) {
    'use strict';

    /* Return a ItemView class definition */
    return Backbone.Marionette.CollectionView.extend({

        initialize: function() {
            console.log("initialize a Products CollectionView");
        },

        childView: Product,


        /* ui selector cache */
        ui: {},

        /* Ui events hash */
        events: {},

        /* on render callback */
        onRender: function () {
            console.log("render a Products CollectionView");
        }
    });

});
