(function () {
    'use strict';

    var services = angular.module('authentification.services');

    services.factory('authService', ['localStorageService',function (localStorageService) {


        var authServiceFactory = {};

        var _authentication = {
            isAuth: false,
            userName: ""
        };


        var _login = function (loginData) {

            /*var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;

             var deferred = $q.defer();

             $http.post(serviceBase + 'token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

             localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });

             _authentication.isAuth = true;
             _authentication.userName = loginData.userName;

             deferred.resolve(response);

             }).error(function (err, status) {
             _logOut();
             deferred.reject(err);
             });

             return deferred.promise;
             */
            if (loginData.password === "mdp") {

                localStorageService.set('authorizationData', { token: 'monfauxtokenxxx777', userName: loginData.userName });

                _authentication.isAuth = true;
                _authentication.userName = loginData.userName;

                return true;
            } else {
                return false;

            }


        };
        var _logOut = function () {

            localStorageService.remove('authorizationData');

            _authentication.isAuth = false;
            _authentication.userName = "";

        };

        var _fillAuthData = function () {


             var authData = localStorageService.get('authorizationData');
             if (authData) {
             _authentication.isAuth = true;
             _authentication.userName = authData.userName;
             }


        }


        authServiceFactory.login = _login;
        authServiceFactory.logOut = _logOut;
        authServiceFactory.fillAuthData = _fillAuthData;
        authServiceFactory.authentication = _authentication;

        return authServiceFactory;
    }]);

})();
