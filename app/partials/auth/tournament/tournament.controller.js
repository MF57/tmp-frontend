/**
 * Created by mf57 on 17.10.2016.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('TournamentCtrl', TournamentController);

    TournamentController.$inject = ['$stateParams', '$state', 'TokenStorage', 'Tournament'];
    function TournamentController($stateParams, $state, TokenStorage, Tournament) {
        const vm = this;
        vm.tournament = {};
        vm.deleteTournament = deleteTournament;
        vm.changeTournamentState = changeTournamentState;


        function deleteTournament() {
            Tournament.remove(vm.tournament.id).$promise.then(successCallback, failureCallback);

            function successCallback(data) {
                $state.go('Dashboard')
            }

            function failureCallback(error) {
                alert("BLAD PRZY USUWANIU TURNIEJU")
            }
        }

        function changeTournamentState(newState) {
            vm.tournament.state = newState;
            Tournament.update(vm.tournament).$promise.then(successCallback, failureCallback);

            function successCallback(data) {
                console.log("OTWARTO ZAPISY")
            }

            function failureCallback(error) {
                alert("BLAD PRZY EDYCJI TURNIEJU")
            }
        }

        function loadAll() {
            Tournament.loadAll($stateParams.tournamentId, TokenStorage.decode(TokenStorage.retrieve()).username)
                .$promise.then(successCallback, failureCallback);


            function successCallback(data) {
                vm.tournament = data;
            }

            function failureCallback(error) {
                console.log("BLAD PRZY WYCIAGANIU TURNIEJU")
            }
        }

        loadAll();
    }


})();