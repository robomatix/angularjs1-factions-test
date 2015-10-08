(function () {
    'use strict';

    var app = angular.module('authentification.app', ['ui.router', 'LocalStorageModule', 'authentification.controllers', 'authentification.services', 'authentification.directives']);

    app.config(function ($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/accueil");
        //
        // Now set up the states
        $stateProvider
            .state('accueil', {
                url: "/accueil",
                templateUrl: "views/accueil.html"
            })
            .state('login', {
                url: "/login",
                templateUrl: "views/login.html",
                controller: "LoginController"
            })
            .state('logged', {
                url: "/logged",
                templateUrl: "views/logged.html"
            })
            .state('factions', {
                url: "/factions",
                templateUrl: "views/factions.html",
                controller: "FactionsController as factions"
            });
    });

    app.config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptorService');
    });


    app.run(['authService', function (authService) {
        authService.fillAuthData();
    }]);

})();