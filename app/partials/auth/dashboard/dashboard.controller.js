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
            vm.ownerTournaments = Dashboard.loadAll();
        };

        vm.loadAll();
    }

})();






