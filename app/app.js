(function () {
    'use strict';

    var app = angular.module("krzychapp", ['ngRoute', 'ngMaterial']);

    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : 'src/auth/view/login.html',
                controller  : 'AuthController'
            })
            .when('/main', {
                templateUrl : 'src/main.html'
            })
            .otherwise('/', {
                templateUrl : 'src/auth/view/login.html',
                controller  : 'AuthController'
            });
    });

}());
