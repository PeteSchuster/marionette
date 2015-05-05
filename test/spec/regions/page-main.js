(function() {
	'use strict';

	var root = this;

	root.define([
		'regions/page-main'
		],
		function( PageMain ) {

			describe('PageMain Region', function () {

				it('should be an instance of PageMain Region', function () {
					var page-main = new PageMain();
					expect( page-main ).to.be.an.instanceof( PageMain );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );