(function () {
    'use strict';

    var controllers = angular.module('authentification.controllers');

    controllers.controller('LoginController', function ($rootScope, $scope, $location,authService) {

        $scope.loginData = {
            userName: "",
            password: ""
        };

        $scope.message = "";

        $scope.login = function () {

            if(authService.login($scope.loginData)) {
                $location.path('/logged');
            } else {
                $scope.message = "Erreur !!! Veuillez ressaisir vos identifiants";
            }


        };
    });
})();
