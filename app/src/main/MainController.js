(function () {
    'use strict';
    angular.module('krzychapp')
        .controller('MainController', MainController);

    MainController.$inject = ['$scope', '$http'];

    function MainController ($scope, $http) {
      $scope.map = { center: { latitude: 52, longitude: 16 }, zoom: 4 };
    }

}());
