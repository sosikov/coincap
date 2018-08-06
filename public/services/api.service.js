angular
	.module('coincapApp')
	.factory('ApiService', function () {
		function test () {
			console.log('test');
		}

		return {
			test : test
		};
	});
