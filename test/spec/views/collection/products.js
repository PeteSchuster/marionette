(function() {
	'use strict';

	var root = this;

	root.define([
		'views/collection/products'
		],
		function( Products ) {

			describe('Products Collectionview', function () {

				it('should be an instance of Products Collectionview', function () {
					var products = new Products();
					expect( products ).to.be.an.instanceof( Products );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );