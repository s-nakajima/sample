
/**
 * base controller
 */
NetCommonsApp.controller('NetCommons.base', function($scope, NcWysiwygOptions) {
	$scope.options = NcWysiwygOptions;
	$scope.content = 'Hello World!!';
});
