app.constant('ROUTERS', [

    {
        "home": {
            "url": "/home",
            "views": {
                "": {
                    "templateUrl": "app/views/layouts/main_layout.html"
                }
            },
            "loginRequired": false
        }
    },


    {
        "home.dashboard": {
            "url": "/dashboard",
            "data": {
                "page": "Dashboard"
            },
            "templateUrl": "app/views/dashboard.html",
            "loginRequired": false
        }
    },

    {
        "home.catalogo": {
            "url": "/catalogo",
            "template": "<div ui-view ></div>"
        }
    },



    {
        "home.catalogo.autores": {
            "url": "/autores",
            "data": {
                "section": "Catálogo",
                "page": "Autores"
            },
            "templateUrl": "app/views/autores/index.html"
        }

    },





]);
