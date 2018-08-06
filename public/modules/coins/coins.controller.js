angular
	.module('coincapApp')
	.controller('CoinsController', function ($scope, ApiService) {
		function activate () {
			console.log('CoinsController is work!');
			console.log('ApiService', ApiService);
		}

		activate();
	});
