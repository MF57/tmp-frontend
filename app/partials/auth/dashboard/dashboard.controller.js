(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('DashboardCtrl', DashboardController);

    DashboardController.$inject = ['Dashboard'];
    function DashboardController(Dashboard) {
        var vm = this;
        vm.ownerTournaments = [];
        vm.refereeTournaments = [];
        vm.participantTournaments = [];


        vm.loadAll = function() {
            var data = Dashboard.loadAll();
            vm.ownerTournaments = data.ownerTournaments;
            vm.refereeTournaments = data.refereeTournaments;
            vm.participantTournaments = data.participantTournaments;
        };

        vm.loadAll();
    }

})();






