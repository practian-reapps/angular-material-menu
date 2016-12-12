app
    .controller('MainCtrl', function($scope, $timeout, $log, $rootScope, $filter,
        apiUrl, $window, menuService, $mdSidenav) {

        $scope.menu = menuService;
        console.log("MainCtrl");

        // set save dynamicTheme
        function getCookie(cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) === 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }

        $scope.setTheme = function(theme) {
            document.cookie = "theme=" + theme;
            $scope.dynamicTheme = theme;
            //$scope.app.setting.theme = theme;
            console.log("cookie dynamicTheme=" + getCookie("theme"));
        };

        $scope.dynamicTheme = getCookie("theme");
        // /set save dynamicTheme

        //
        $scope.app = {
            name: 'AM-Menu',
            version: '1.0.1',
        };
        //




        // show menu
        $scope.toggleLeft = buildDelayedToggler('left');
        $scope.toggleRight = buildToggler('right');
        $scope.asideFolded = false;

        $rootScope.$on('$stateChangeSuccess', function() {
            $timeout(function() {
                if (document.getElementById('left')) {
                    $mdSidenav('left').close();
                }

            });
        });

        $scope.isOpenRight = function() {
            return $mdSidenav('right').isOpen();
        };

        /**
         * Supplies a function that will continue to operate until the
         * time is up.
         */
        function debounce(func, wait, context) {
            var timer;

            return function debounced() {
                var context = $scope,
                    args = Array.prototype.slice.call(arguments);
                $timeout.cancel(timer);
                timer = $timeout(function() {
                    timer = undefined;
                    func.apply(context, args);
                }, wait || 10);
            };
        }

        /**
         * Build handler to open/close a SideNav; when animation finishes
         * report completion in console
         */
        function buildDelayedToggler(navID) {
            return debounce(function() {
                // Component lookup should always be available since we are not using `ng-if`
                $mdSidenav(navID)
                    .toggle()
                    .then(function() {
                        $log.debug("toggle " + navID + " is done");
                    });
            }, 200);
        }

        function buildToggler(navID) {
            return function() {
                // Component lookup should always be available since we are not using `ng-if`
                $mdSidenav(navID)
                    .toggle()
                    .then(function() {
                        $log.debug("toggle " + navID + " is done");
                    });
            };
        } 


    })


.controller('LeftCtrl', function($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav('left').close()
            .then(function() {
                $log.debug("close LEFT is done");
            });

    };
})

.controller('RightCtrl', function($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav('right').close()
            .then(function() {
                $log.debug("close RIGHT is done");
            });
    };
});
