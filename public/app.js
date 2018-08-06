angular
	.module('coincapApp', [ 'ui.router' ])
	.config(function ($stateProvider) {
		var coinsState = {
			name        : 'coins',
			url         : '/coins',
			controller  : 'CoinsController',
			templateUrl : '/modules/coins/coins.html'
		};

		var blankState = {
			name        : 'blank',
			url         : '/blank',
			controller  : 'BlankController',
			templateUrl : '/modules/blank/blank.html'
		};

		$stateProvider.state(coinsState);
		$stateProvider.state(blankState);
	});
