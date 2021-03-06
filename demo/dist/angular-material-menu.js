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

var app = angular.module("pi.dynamicMenu");

app.service("menuService", function($document, $window, $timeout, $q, $location, $http, $log, $state) {
    this.apiMenuUrl = "";
    this.menuUrl = "";
    var sections = [];
    this.getUserMenu = function() {
        console.log("exec UserMenuView");
        return $http.get(this.apiMenuUrl);
    };
    this.getMenuJson = function() {
        console.log("exec getMenuJson");
        return $http.get(this.menuUrl);
    };
    this.getMenu = function() {
        this.getMenuJson().then(function(r) {
            menu = r.data;
            console.log("menuService.getMenuJson():" + JSON.stringify(menu));
            sections.push(menu);
        }, function(error) {
            console.log("error in menuService.getMenuJson():" + JSON.stringify(error));
        });
        if (this.apiMenuUrl !== "") {
            console.log("this.apiMenuUrl:" + this.apiMenuUrl);
            this.getUserMenu().then(function(r) {
                menu = r.data;
                sections.push(menu);
            }, function(error) {
                console.log("error in menuService.getUserMenu():" + JSON.stringify(error));
            });
        }
        return {
            sections: sections
        };
    };
});