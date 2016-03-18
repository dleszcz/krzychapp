(function () {
    'use strict';
    angular.module('krzychapp')
        .controller('AuthController', AuthController);

    AuthController.$inject = ['$scope', '$http'];

    function AuthController($scope, $http) {
        console.log('Hi from AuthController');

        var url = 'http://krzychapi.azurewebsites.net/';

        $scope.login = function () {
            $http.get(url + 'api/Account/ExternalLogin?provider={' + 'facebook' +'}').
                success(function (data) {
                    console.log(data);
                });
        }
    }

}());