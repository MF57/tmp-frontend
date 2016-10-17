/**
 * Created by mf57 on 17.10.2016.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('TournamentCtrl', TournamentController);

    TournamentController.$inject = ['$stateParams', 'TokenStorage', 'Tournament'];
    function TournamentController($stateParams, TokenStorage, Tournament) {
        var vm = this;
        vm.tournament = {};

        function loadAll() {
            vm.tournament = Tournament
                .loadAll($stateParams.tournamentId, TokenStorage.decode(TokenStorage.retrieve()).username);
        }

        loadAll();
    }


})();