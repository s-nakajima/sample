
/**
 * base controller
 */
NetCommonsApp.controller('NetCommons.base', function($scope, NcModuleConstants) {
	$scope.message = 'Hello World!!';
  $scope.value1 = NcModuleConstants.value1;
  $scope.value2 = NcModuleConstants.value2;
});

NetCommonsApp.controller('Controller1', function($scope, NcModuleValues) {
	$scope.message = 'NcModuleValues Test';
  $scope.value1 = NcModuleValues.value1;
  $scope.value2 = NcModuleValues.value2;
});

NetCommonsApp.controller('Controller2', function($scope, NcModuleValueFunc) {
	$scope.message = 'NcModuleValueFunc Test';
  $scope.value1 = NcModuleValueFunc(1111, 2222);
});
NetCommonsApp.controller('Controller3', function($scope) {
	$scope.message = 'ng-true-value ng-false';
  $scope.check = true;
  $scope.checkOnOff = 0;
});
