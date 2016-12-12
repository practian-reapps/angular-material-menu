########################################
angular-material-menu
########################################

.. class:: no-web

    Paquete para el menu dinámico en Angular con Material 



    .. image:: https://github.com/.. .png
        :alt: angular-material-menu
        :width: 100%
        :align: center



.. contents::

.. section-numbering::

.. raw:: pdf

   PageBreak oneColumn


============
Installation
============

-------------------
Dependencies
-------------------
- angular-material-icons (not part of the bundle)
- angular-material (not part of the bundle)
- angular-ui-router (not part of the bundle)
- angular (not part of the bundle)

-------------------
Development version
-------------------


The **latest development version** can be installed directly from github_:

.. code-block:: bash
    
    # Universal
    $ bower install https://github.com/practian-reapps/angular-material-menu.git --production --save


Add to your **index.html** setting like this:

.. code-block:: html

    <link rel="stylesheet" href="bower_components/angular-material-menu/dist/angular-material-menu.css" type="text/css" />
    
    <script src="bower_components/angular-material-menu/dist/angular-material-menu.js"></script>

Llenando el menú dinámico en menu.json:

.. code-block:: js

    {

        "menu": [

            {
                "title": "Dashboard",
                "state": "home.dashboard",
                "type": "link"
            },


            {
                "title": "Catálogo",
                "type": "toggle",
                "state": "home.catalogo",
                "menu_items": [{
                    "title": "Categorías",
                    "state": "home.catalogo.categorias",
                    "type": "link"
                }, {
                    "title": "Autores",
                    "state": "home.catalogo.autores",
                    "type": "link"
                }]
            }
        ]

    }


 


Config module:

.. code-block:: js

    var app = angular.module('app', [
        'ui.router',
        'ngMaterial',
        'ngMdIcons',
        'pi.dynamicMenu',
    ]);

Obteniendo el menu via http:

.. code-block:: js
    
    app
    .run(function($state, $rootScope, $location, $window, menuService) {

        menuService.menuUrl = "menu.json";
        // activar también si tiene el menu en una API 
        // menuService.apiMenuUrl = "http://localhost:7001/api/oauth2_backend/usermenu/"; 
        $rootScope.menu = menuService.getMenu();

    });




Construcción del menú:

.. code-block:: html

    <nav>
        <ul class="nav">
            <div ng-repeat="section in menu.sections">
                
                <div ng-repeat="menu in section.menu">
                    <li ng-if="menu.type === 'toggle'" ng-class="{'active toggled':$state.includes('{{menu.state}}')}">
                        <a md-ink-ripple toggle-submenu class="inherit">
                            <span class="pull-right  ">
                              <ng-md-icon icon="keyboard_arrow_down"></ng-md-icon>
                            </span>
                            <i class="icon mdi-action-subject i-20"></i>
                            <span class="font-normal">{{menu.title}}</span>
                        </a>
                        <ul class="nav nav-sub" ng-repeat="menu_item in menu.menu_items">
                            <li ui-sref-active="active">
                                <a md-ink-ripple ui-sref="{{menu_item.state}}">{{menu_item.title}}</a>
                            </li>
                        </ul>
                    </li>
                    <li ui-sref-active="active" ng-if="menu.type === 'link'">
                        <a md-ink-ripple ui-sref="{{menu.state}}">
                            <span>{{menu.title}}</span>
                        </a>
                    </li>
                </div>
                <li ui-sref-active="active" ng-if="section.type === 'link'">
                    <a md-ink-ripple ui-sref="{{section.state}}">
                        <span>{{section.title}}</span>
                    </a>
                </li>
            </div>


        </ul>
    </nav>

Finally, run ``gulp serve``.




====
Meta
====

-------
Authors
-------

- Angel Sullon Macalupu (asullom@gmail.com)



-------
Contributors
-------

See https://github.com/practian-reapps/angular-material-menu/graphs/contributors

.. _github: https://github.com/practian-reapps/angular-material-menu
.. _Django: https://www.djangoproject.com
.. _Django REST Framework: http://www.django-rest-framework.org
.. _Django OAuth Toolkit: https://django-oauth-toolkit.readthedocs.io
.. _oauth2_backend: https://github.com/practian-reapps/django-oauth2-backend
.. _Authorization server: https://github.com/practian-ioteca-project/oauth2_backend_service
.. _OAuth 2 Server Libraries: https://oauth.net/code
.. _Django backend utils: https://github.com/practian-reapps/django-backend-utils/blob/master/backend_utils/menu.py







