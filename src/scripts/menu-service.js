var app = angular.module("pi.dynamicMenu");



app.service("menuService", function($document, $window, $timeout, $q, $location, $http, $log, $state) {

    this.apiMenuUrl = "";
    this.menuUrl = "";
    var sections = [
        /*
        {
          title: 'Getting Started',
          state: 'getting-started',
          url: '/getting-started',
          type: 'link'
        }
        */
    ];

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
            //console.log("menuService.getMenuJson():" + JSON.stringify(menu));
            sections.push(

                menu
            );

        }, function(error) {
            console.log("error in menuService.getMenuJson():" + JSON.stringify(error));
        });

        

        if (this.apiMenuUrl !== '') {
            console.log("this.apiMenuUrl:" + this.apiMenuUrl);
            this.getUserMenu().then(function(r) {
                menu = r.data;
                //console.log("menuService.getUserMenu():" + JSON.stringify(menu));
                sections.push(

                    menu
                );

            }, function(error) {
                console.log("error in menuService.getUserMenu():" + JSON.stringify(error));
            });
        }

        // return true;
        return {
            sections: sections
        };

    };


});
