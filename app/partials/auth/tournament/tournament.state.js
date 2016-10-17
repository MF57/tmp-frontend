/**
 * Created by mf57 on 17.10.2016.
 */
(function () {
    'use strict';

    angular
        .module('myApp')
        .config(StateConfig);

    StateConfig.$inject = ['$stateProvider'];
    function StateConfig($stateProvider) {

        $stateProvider
            .state('Tournament', {
                url:"/tournament",
                templateUrl: "partials/auth/tournament/tournament.html",
                controller: "TournamentCtrl",
                controllerAs: "vm",
                parent:"main",
                params: {
                    tournamentId: ''
                }
            })

    }


})();