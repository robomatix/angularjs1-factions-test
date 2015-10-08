(function () {
    'use strict';

    var services = angular.module('authentification.services');

    services.factory('authInterceptorService', ['$q', '$location', 'localStorageService', function ($q, $location, localStorageService) {

        var authInterceptorServiceFactory = {};

        /*
         var _request = function (config) {

         config.headers = config.headers || {};

         var authData = localStorageService.get('authorizationData');
         if (authData) {
         config.headers.Authorization = 'Bearer ' + authData.token;
         }

         return config;
         }

         var _responseError = function (rejection) {
         if (rejection.status === 401) {
         $location.path('/login');
         }
         return $q.reject(rejection);
         }

         authInterceptorServiceFactory.request = _request;
         authInterceptorServiceFactory.responseError = _responseError;

         return authInterceptorServiceFactory;
         */

        var authData = localStorageService.get('authorizationData');
        if (!authData) {
            console.log('NOT logged');
            $location.path('/login');

        }else{
            console.log('logged');
        }

        return true;

    }]);
})();
