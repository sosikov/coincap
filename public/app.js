angular
	.module('coincapApp', [ 'ui.router' ])
	.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('coins', {
				url          : '/coins',
				controller   : 'CoinsController',
				controllerAs : 'coinsCtrl',
				templateUrl  : '/modules/coins/coins.html'
			})
			.state('blank', {
				url          : '/blank',
				controller   : 'BlankController',
				controllerAs : 'blankCtrl',
				templateUrl  : '/modules/blank/blank.html'
			});

		$urlRouterProvider.otherwise('/coins');
	});
