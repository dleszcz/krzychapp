(function () {
    'use strict';
    angular.module('krzychapp')
        .service('AuthService', AuthService);

    AuthService.$inject = ['Facebook'];

    function AuthService(Facebook) {

        var getPromise = function() {
            //create the promise, this will be returned from this function
            Facebook.getLoginStatus(function(response) {
                return response;
            });

        };

        return {
            getPromise:getPromise
        }

    }

}());