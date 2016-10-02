/**
 * Created by Szymek on 02/10/2016.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .config(StateConfig);

    StateConfig.$inject = ['$stateProvider'];
    function StateConfig($stateProvider) {
        $stateProvider
            .state('tournamentcreator', {
                url:"/tournamentcreator",
                templateUrl: "partials/auth/tournamentcreator/tournamentcreator.html",
                controller: "TournamentCreatorController",
                controllerAs: "vm",
                parent:"main"
            })

    }

})();