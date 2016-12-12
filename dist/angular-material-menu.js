/**
 * angular-material-menu - Un angular-material-menu
 * @author practian
 * @version v1.0.0
 * @link 
 * @license ISC
 */
(function() {
    angular.module("pi.dynamicMenu", []);
    var menuuno = angular.module("pi.dynamicMenu");
    menuuno.directive("toggleSubmenu", function($timeout) {
        return {
            restrict: "A",
            link: function(scope, element, attrs) {
                element.bind("click", function(e) {
                    element.parent().toggleClass("toggled");
                    var li = angular.element(this).parent();
                    li.toggleClass("active");
                });
            }
        };
    });
})();