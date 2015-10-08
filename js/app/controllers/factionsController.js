(function () {
    'use strict';

    var controllers = angular.module('authentification.controllers');

    controllers.controller('FactionsController', ['$scope','factionsService', function ($scope, factionsService) {
var factions = this;
        factions.factionsList = [];
        $scope.sortOrder = 'name';

        getFactions();

        function getFactions() {

            factions.factionsList = factionsService.get();

        };

        factions.addFaction = function() {
            console.log('Add Faction');
            factions.factionsList.push({name:factions.factionName});
            factions.factionName = '';
        };

        factions.supprimerSelection = function() {
            var oldFactions = factions.factionsList;
            factions.factionsList = [];
            angular.forEach(oldFactions, function(faction) {
                if (!faction.action) factions.factionsList.push(faction);
            });
        };
        factions.supprimeFaction = function (faction) {
            console.log('Supprime Faction');
            factions.factionsList.splice(factions.factionsList.indexOf(faction), 1);
        };

    }]);
})();
