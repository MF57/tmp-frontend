/**
 * Created by mf57 on 17.10.2016.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('TournamentCtrl', TournamentController);

    TournamentController.$inject = ['$stateParams'];
    function TournamentController($stateParams) {
        var vm = this;
        vm.tournamentId = '';

        function loadAll() {
            vm.tournamentId = $stateParams.tournamentId;

        }

        loadAll();
    }


})();