define([
    'backbone',
    'views/item/product'
],
function (Backbone, ProductItemView) {
    'use strict';

    /* Return a ItemView class definition */
    return Backbone.Marionette.CollectionView.extend({

        initialize: function () {
            console.log("initialize a Products CollectionView");
        },

        itemView: ProductItemView,


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
