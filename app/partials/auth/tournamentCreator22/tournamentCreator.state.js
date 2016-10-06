/**
 * Created by mf57 on 04.09.2016.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .config(StateConfig);

    StateConfig.$inject = ['$stateProvider'];
    function StateConfig($stateProvider) {

        $stateProvider
            .state('TournamentCreator', {
                url:"/creator",
                templateUrl: "partials/auth/tournamentCreator22/tournamentCreator22.html",
                controller: "TournamentCreatorCtrl",
                controllerAs: "vm",
                parent:"main"
            })

    }

})();