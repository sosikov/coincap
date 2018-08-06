angular
	.module('coincapApp')
	.controller('CoinsController', function ($scope, ApiService) {
		function activate () {
			console.log('CoinsController is work!');

			ApiService
				.getCoins()
				.then(function (response) {
					console.log('response', response);
				})
				.catch(function (error) {
					console.error('error', error);
				});

			var params = 'ETC'; // test API with params

			ApiService
				.getCurrentCoin(params)
				.then(function (response) {
					console.log('response', response);
				})
				.catch(function (error) {
					console.error('error', error);
				});
		}

		activate();
	});
