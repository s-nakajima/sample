
/**
 * base controller
 */
NetCommonsApp.controller('NetCommons.base', function($scope, NetCommonsWysiwyg) {
	$scope.options = NetCommonsWysiwyg.options;
	$scope.content = 'Hello World!!';
  });
