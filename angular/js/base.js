
/**
 * base controller
 */
NetCommonsApp.controller('NetCommons.base', function($scope, NcModuleConstants) {
	$scope.content = 'Hello World!!';
  $scope.value1 = NcModuleConstants.value1;
  $scope.value2 = NcModuleConstants.value2;
});


NetCommonsApp.controller('Controller1', function($scope, NcModuleValues) {
	$scope.content = 'Hello World 22222!!';
  $scope.value1 = NcModuleValues.value1;
  $scope.value2 = NcModuleValues.value2;
});
