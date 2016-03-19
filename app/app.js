(function () {
    'use strict';

    var app = angular.module("krzychapp", ['ngRoute', 'ngMaterial', 'uiGmapgoogle-maps']);

    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : 'src/auth/view/login.html',
                controller  : 'AuthController'
            })
            .when('/main', {
                templateUrl : 'src/main/view/main.html',
                controller: 'MainController'
            })
            .otherwise('/', {
                templateUrl : 'src/auth/view/login.html',
                controller  : 'AuthController'
            });
    });

}());
