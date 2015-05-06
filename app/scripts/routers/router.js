/*global $, define, _*/

define([
    'backbone',
    'backbone.marionette',
    'models/product',
    'collections/products',
    'views/collection/products'
],
function (Backbone, Marionette, ProductModel, ProductCollection, ProductCollectionView) {
    'use strict';

    var Router = Backbone.Marionette.AppRouter.extend({
        /* Backbone routes hash */
        routes: {
            '': 'processUser'
        },

        processUser: function () {
            var sampleProducts = [
                {
                    'id': '1',
                    'index': 0,
                    'guid': 'e17aa180-1e3d-4a04-bc93-ecbaf5ac3b5d',
                    'isActive': true,
                    'balance': '$1,280.46',
                    'picture': 'http://placehold.it/32x32',
                    'age': 32,
                    'eyeColor': 'brown',
                    'name': 'Ellison Haney',
                    'gender': 'male',
                    'company': 'MAGNAFONE'
                },
                {
                    'id': '2',
                    'index': 1,
                    'guid': '3e8299ce-9ba8-401f-9ac0-699021f5282f',
                    'isActive': false,
                    'balance': '$2,183.06',
                    'picture': 'http://placehold.it/32x32',
                    'age': 22,
                    'eyeColor': 'blue',
                    'name': 'Shannon Mccray',
                    'gender': 'female',
                    'company': 'STOCKPOST'
                },
                {
                    'id': '3',
                    'index': 2,
                    'guid': '7d237975-4cff-45c3-8fe4-7f650a8bb78e',
                    'isActive': false,
                    'balance': '$1,243.61',
                    'picture': 'http://placehold.it/32x32',
                    'age': 39,
                    'eyeColor': 'brown',
                    'name': 'Glass Noel',
                    'gender': 'male',
                    'company': 'VERBUS'
                },
                {
                    'id': '4',
                    'index': 3,
                    'guid': 'a81aca4a-974d-419a-bc89-54eefd8cfeab',
                    'isActive': false,
                    'balance': '$3,545.68',
                    'picture': 'http://placehold.it/32x32',
                    'age': 31,
                    'eyeColor': 'green',
                    'name': 'Harriett Blair',
                    'gender': 'female',
                    'company': 'DRAGBOT'
                },
                {
                    'id': '5',
                    'index': 4,
                    'guid': 'a8a0053c-a069-4485-addf-28386c76c430',
                    'isActive': true,
                    'balance': '$3,601.44',
                    'picture': 'http://placehold.it/32x32',
                    'age': 37,
                    'eyeColor': 'brown',
                    'name': 'Gomez Benjamin',
                    'gender': 'male',
                    'company': 'COMSTRUCT'
                }
            ],

            productCollection = new ProductCollection(),

            cartItems = ['3', '4'],

            productCollectionView;

            _.each(sampleProducts, function (sampleProduct) {
                var product;

                // if item is in cart array
                // set inCart property
                sampleProduct.inCart = (cartItems.indexOf(sampleProduct.id) >= 0) ? true : false;
                console.log(sampleProduct.id, sampleProduct.inCart);

                // add sample product to collection
                product = new ProductModel(sampleProduct);

                productCollection.add(product);
            });

            productCollectionView = new ProductCollectionView({ collection: productCollection });

            $(document.body).append(productCollectionView.render().el);
        }
    });

    return new Router();
});
