(function() {
	'use strict';

	var root = this;

	root.define([
		'regions/page-aside'
		],
		function( PageAside ) {

			describe('PageAside Region', function () {

				it('should be an instance of PageAside Region', function () {
					var page-aside = new PageAside();
					expect( page-aside ).to.be.an.instanceof( PageAside );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );