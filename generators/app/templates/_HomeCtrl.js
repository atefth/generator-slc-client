var controllers = angular.module('<%= name %>.controllers');

controllers
.controller('HomeCtrl', ['$rootScope', '$scope', function($rootScope, $scope){
	$rootScope.booted = true;
	console.log($rootScope.booted);
	$scope.items = ['One', 'Two', 'And', 'Three', 'Makes', 'Six'];
}]);