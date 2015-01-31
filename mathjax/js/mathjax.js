
var NcMathJax = angular.module('nc.mathjax',
    [
      'ui.bootstrap'
    ]
  );

NcMathJax.config(function () {
    //Set MathJax config
    MathJax.Hub.Config({
      skipStartupTypeset: true,
      messageStyle: 'none',
      'HTML-CSS': {
        showMathMenu: false
      }/*,
      tex2jax: {inlineMath: [["$","$"],["\\(","\\)"]]}*/
    });
    MathJax.Hub.Configured();
  });

NcMathJax.directive("ncMathjaxBind", function($sce) {
    return {
        restrict: "A",
        controller: ["$scope", "$element", "$attrs", function($scope, $element, $attrs) {
            $scope.$watch($attrs.ncMathjaxBind, function(value) {
              var htmlValue = angular.isUndefined(value) ?
                                      '' : value;
              var $script =
                    angular.element("<script type='math/tex'>").html(htmlValue);
              $element.html("");
              $element.append($script);
              MathJax.Hub.Queue(["Reprocess", MathJax.Hub, $element[0]]);
            });
        }]
    };
});
