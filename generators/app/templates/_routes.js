var app = angular.module('<%= name %>');

app
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('/', {
		url: "/",
		templateUrl: "views/commons/home.html",
		controller: 'HomeCtrl'
	})
	.state('/404', {
		url: "/404",
		templateUrl: "views/commons/404.html"
	});
}]);