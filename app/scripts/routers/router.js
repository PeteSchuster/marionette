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
                "_id": "55495f8ec7b2edab9c8e5766",
                "index": 0,
                "guid": "e17aa180-1e3d-4a04-bc93-ecbaf5ac3b5d",
                "isActive": true,
                "balance": "$1,280.46",
                "picture": "http://placehold.it/32x32",
                "age": 32,
                "eyeColor": "brown",
                "name": "Ellison Haney",
                "gender": "male",
                "company": "MAGNAFONE"
              },
              {
                "_id": "55495f8e750b78735e99aa0e",
                "index": 1,
                "guid": "3e8299ce-9ba8-401f-9ac0-699021f5282f",
                "isActive": false,
                "balance": "$2,183.06",
                "picture": "http://placehold.it/32x32",
                "age": 22,
                "eyeColor": "blue",
                "name": "Shannon Mccray",
                "gender": "female",
                "company": "STOCKPOST"
              },
              {
                "_id": "55495f8eb3023f0e689666ab",
                "index": 2,
                "guid": "7d237975-4cff-45c3-8fe4-7f650a8bb78e",
                "isActive": false,
                "balance": "$1,243.61",
                "picture": "http://placehold.it/32x32",
                "age": 39,
                "eyeColor": "brown",
                "name": "Glass Noel",
                "gender": "male",
                "company": "VERBUS"
              },
              {
                "_id": "55495f8e334e2c38dccf5fa3",
                "index": 3,
                "guid": "a81aca4a-974d-419a-bc89-54eefd8cfeab",
                "isActive": false,
                "balance": "$3,545.68",
                "picture": "http://placehold.it/32x32",
                "age": 31,
                "eyeColor": "green",
                "name": "Harriett Blair",
                "gender": "female",
                "company": "DRAGBOT"
              },
              {
                "_id": "55495f8e6e419a1bcf4f99e9",
                "index": 4,
                "guid": "a8a0053c-a069-4485-addf-28386c76c430",
                "isActive": true,
                "balance": "$3,601.44",
                "picture": "http://placehold.it/32x32",
                "age": 37,
                "eyeColor": "brown",
                "name": "Gomez Benjamin",
                "gender": "male",
                "company": "COMSTRUCT"
              }
            ];

            var productCollection = new ProductCollection();

            _.each(sampleProducts, function (sampleProduct) {
                var product = new ProductModel(sampleProduct);

                productCollection.add(product);
            });

            var productCollectionView = new ProductCollectionView({ collection: productCollection });

            $(document.body).append(productCollectionView.render().el);
        }
    });

    return new Router();
});
