(function () {
    'use strict';
    angular.module('krzychapp')
        .controller('MainController', MainController);

    MainController.$inject = ['$scope', '$http', 'Facebook', 'AuthService'];

    function MainController ($scope, $http, Facebook) {
        $scope.map = {center: {latitude: 52, longitude: 16}, zoom: 4};

        $scope.userObject = {};

        Facebook.getLoginStatus(function (response) {
            $scope.userObject.id = response.authResponse.userID;
        });

        console.log($scope.userObject);

        $scope.submit = function (data) {

            $scope.userObject = {
                name: $scope.user.name,
                surname: $scope.user.surname,
                address: $scope.user.address,
                city: $scope.user.city,
                country: $scope.user.country,
                postalCode: $scope.user.postalCode,
                email: $scope.user.email,
                phone: $scope.user.phone
            };

            var jsonString = JSON.stringify($scope.userObject);

            console.log(jsonString);
        };
    }
}());
