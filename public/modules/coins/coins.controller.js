angular
	.module('coincapApp')
	.filter('typeof', function () {
		return function (obj) {
			return typeof obj;
		};
	})
	.controller('CoinsController', function ($scope, ApiService) {
		function activate () {
			$scope.loader = true;

			ApiService
				.getAllCoins()
				.then(function (response) {
					$scope.coins = response.data;
					$scope.loader = false;
				})
				.catch(function (error) {
					console.error('error', error);
					$scope.loader = false;
				});
		}

		function selectCoin (coin) {
			$scope.loader = true;

			ApiService
				.getCurrentCoin(coin)
				.then(function (response) {
					$scope.currentCoin = response.data;
					$scope.loader = false;
				})
				.catch(function (error) {
					console.error('error', error);
					$scope.loader = false;
				});
		}

		$scope.selectCoin = selectCoin;
		activate();
	});
