(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/product'
		],
		function( Product ) {

			describe('Product Itemview', function () {

				it('should be an instance of Product Itemview', function () {
					var product = new Product();
					expect( product ).to.be.an.instanceof( Product );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );