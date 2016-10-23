(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('DashboardCtrl', DashboardController);

    DashboardController.$inject = ['Dashboard', '$state', 'TokenStorage'];
    function DashboardController(Dashboard, $state) {
        var vm = this;
        vm.ownerTournaments = [];
        vm.refereeTournaments = [];
        vm.participantTournaments = [];
        vm.loadAll = loadAll;
        vm.goToTournament = goToTournament;


        function loadAll() {
            Dashboard.loadAll().$promise.then(successCallback, failureCallback);


            function successCallback(data) {
                vm.ownerTournaments = data.ownerTournaments;
                vm.refereeTournaments = [];
                vm.participantTournaments = [];
            }

            function failureCallback(error) {
                console.log("BLAD PRZY WYCIAGANIU TURNIEJOW")
            }
        }

        function goToTournament(tournament) {
            $state.go('Tournament', {'tournamentId' : tournament.tournamentId})
        }

        vm.loadAll();
    }

})();






