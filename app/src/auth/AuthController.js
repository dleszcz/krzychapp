(function () {
    'use strict';
    angular.module('krzychapp')
        .controller('AuthController', AuthController);

    AuthController.$inject = ['$scope', '$http'];

    function AuthController($scope, $http) {

        var url = 'http://krzychapp.azurewebsites.net';

        $scope.login = function () {
            $http.get(url + '/api/Account/ExternalLogins?returnUrl=%2F&generateState=true').
                success(function (data) {
                    console.log(data);
                });
        }
    }

}());