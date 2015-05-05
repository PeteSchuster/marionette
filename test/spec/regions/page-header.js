(function() {
	'use strict';

	var root = this;

	root.define([
		'regions/page-header'
		],
		function( PageHeader ) {

			describe('PageHeader Region', function () {

				it('should be an instance of PageHeader Region', function () {
					var page-header = new PageHeader();
					expect( page-header ).to.be.an.instanceof( PageHeader );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );