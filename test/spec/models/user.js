(function() {
	'use strict';

	var root = this;

	root.define([
		'models/user'
		],
		function( User ) {

			describe('User Model', function () {

				it('should be an instance of User Model', function () {
					var user = new User();
					expect( user ).to.be.an.instanceof( User );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );