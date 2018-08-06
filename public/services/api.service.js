angular
	.module('coincapApp')
	.factory('ApiService', function ($http) {
		function getAllCoins () {
			return $http.get('http://coincap.io/coins/');
		}

		function getCurrentCoin (params) {
			return $http.get('http://coincap.io/page/' + params);
		}

		return {
			getAllCoins    : getAllCoins,
			getCurrentCoin : getCurrentCoin
		};
	});
