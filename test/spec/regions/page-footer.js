(function() {
	'use strict';

	var root = this;

	root.define([
		'regions/page-footer'
		],
		function( PageFooter ) {

			describe('PageFooter Region', function () {

				it('should be an instance of PageFooter Region', function () {
					var page-footer = new PageFooter();
					expect( page-footer ).to.be.an.instanceof( PageFooter );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );