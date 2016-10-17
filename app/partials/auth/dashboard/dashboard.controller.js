(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('DashboardCtrl', DashboardController);

    DashboardController.$inject = ['Dashboard', '$state'];
    function DashboardController(Dashboard, $state) {
        var vm = this;
        vm.ownerTournaments = [];
        vm.refereeTournaments = [];
        vm.participantTournaments = [];
        vm.loadAll = loadAll;
        vm.goToTournament = goToTournament;


        function loadAll() {
            var data = Dashboard.loadAll();
            vm.ownerTournaments = data.ownerTournaments;
            vm.refereeTournaments = data.refereeTournaments;
            vm.participantTournaments = data.participantTournaments;
        }

        function goToTournament(tournament) {
            alert(tournament.tournamentId)
        }

        vm.loadAll();
    }

})();






