angular
	.module('coincapApp')
	.filter('typeof', function () {
		return function (obj) {
			return typeof obj;
		};
	})
	.controller('CoinsController', function ($scope, ApiService) {
		function activate () {
			ApiService
				.getAllCoins()
				.then(function (response) {
					$scope.coins = response.data;
				})
				.catch(function (error) {
					console.error('error', error);
				});
		}

		function selectCoin (coin) {
			ApiService
				.getCurrentCoin(coin)
				.then(function (response) {
					$scope.currentCoin = response.data;
				})
				.catch(function (error) {
					console.error('error', error);
				});
		}

		$scope.selectCoin = selectCoin;
		activate();
	});
