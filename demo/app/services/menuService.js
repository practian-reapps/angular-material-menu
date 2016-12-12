app
//------------------------------
// menuService
// colocar aqui el menu para su Modelo, vease test1. 
// o registrar el la tabla Menu
//------------------------------
    .factory("menuService", function($http, apiMenuUrl, menuUrl) {

    function getUserMenu() {
        console.log("exec UserMenuView");
        return $http.get(apiMenuUrl);

    }

    function getMenuJson() {
        console.log("exec getMenuJson");
        return $http.get(menuUrl);

    }

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
    /*
        sections.push({
            title: 'Dashboard',
            state: 'home.dashboard',
            type: 'link'
        });
    **/
    /*

    sections.push({

        menu: [{
            title: 'Auths System',
            type: 'toggle',
            state: 'auths.system',
            menu_items: [{
                title: 'xx',
                state: 'auths.system.xx',
                type: 'link'
            }, {
                title: 'Grupos',
                state: 'auths.system.ct',
                type: 'link'
            }, {
                title: 'Permission',
                state: 'auths.system.permission',
                type: 'link'
            }, {
                title: 'Menu',
                state: 'auths.system.menu',
                type: 'link'
            }, {
                title: 'Log',
                state: 'auths.system.log',
                type: 'link'
            }, ]
        }]
    });


    sections.push({

        menu: [{
            title: 'Catálogo',
            type: 'toggle',
            state: 'home.catalogo',
            menu_items: [{
                title: 'Categorías',
                state: 'home.catalogo.categorias',
                type: 'link'
            }, {
                title: 'Autores',
                state: 'home.catalogo.autores',
                type: 'link'
            }, ]
        }]
    });
*/

    getMenuJson().then(function(r) {
        menu = r.data;
        //console.log("menuService.getMenuJson():" + JSON.stringify(menu));
        sections.push(

            menu
        );

    }, function(error) {
        console.log("error in menuService.getMenuJson():" + JSON.stringify(error));
    });

    if (apiMenuUrl !=='') {

        getUserMenu().then(function(r) {
            menu = r.data;
            //console.log("menuService.getUserMenu():" + JSON.stringify(menu));
            sections.push(

                menu
            );

        }, function(error) {
            console.log("error in menuService.getUserMenu():" + JSON.stringify(error));
        });
    }




    return {
        sections: sections,
    };
});
