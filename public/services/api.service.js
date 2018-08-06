angular
	.module('coincapApp')
	.factory('ApiService', function ($http) {
		function getCoins () {
			return $http.get('http://coincap.io/coins/');
		}

		function getCurrentCoin (params) {
			return $http.get('http://coincap.io/page/' + params);
		}

		return {
			getCoins       : getCoins,
			getCurrentCoin : getCurrentCoin
		};
	});
