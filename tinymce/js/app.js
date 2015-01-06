
var NetCommonsApp = angular.module('NetCommonsApp',
    [
      'ui.bootstrap',
      'ui.tinymce'
    ]
    );


/**
 * NetCommonsWysiwyg factory
 */
NetCommonsApp.factory('NetCommonsWysiwyg', function() {

  /**
   * tinymce optins
   *
   * @type {{mode: string, menubar: string, plugins: string, toolbar: string}}
   */
  var options = {
    mode: 'exact',
    menubar: ' ',
    plugins: 'textcolor advlist autolink charmap code link ',
    toolbar: 'undo redo  |' +
        ' forecolor |' +
        ' styleselect |' +
        ' bold italic |' +
        ' alignleft aligncenter alignright alignjustify |' +
        ' bullist numlist outdent indent |' +
        ' link |'
  };

  return {
    options: options
  };
});


/**
 * base controller
 */
NetCommonsApp.controller('NetCommons.base', function($scope, NetCommonsWysiwyg) {
	$scope.options = NetCommonsWysiwyg.options;
	$scope.content = 'Hello World!!';
  });
