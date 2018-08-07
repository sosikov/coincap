angular
	.module('coincapApp')
	.filter('typeof', function () {
		return function (obj) {
			return typeof obj;
		};
	})
	.controller('CoinsController', function (ApiService) {
		var vm = this;

		function activate () {
			vm.loader = true;

			ApiService
				.getAllCoins()
				.then(function (response) {
					vm.coins = response.data;
					vm.loader = false;
				})
				.catch(function (error) {
					console.error('error', error);
					vm.loader = false;
				});
		}

		function selectCoin (coin) {
			if (!coin) {
				return;
			}
			vm.loader = true;

			ApiService
				.getCurrentCoin(coin)
				.then(function (response) {
					vm.currentCoin = response.data;
					vm.loader = false;
				})
				.catch(function (error) {
					console.error('error', error);
					vm.loader = false;
				});
		}

		vm.selectCoin = selectCoin;
		activate();
	});
