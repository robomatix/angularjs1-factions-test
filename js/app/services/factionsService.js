(function () {
    'use strict';

    var services = angular.module('authentification.services');

    services.factory('factionsService', [function () {

        var get = function(){
            var factionsList = [
                {name: 'Arcanists'},
                {name: 'Neverborn'},
                {name: 'Resurrectionists'},
                {name: 'Outcasts'}
            ];
            return factionsList;
        };

        return {
            get: get
        }

    }]);



})();
