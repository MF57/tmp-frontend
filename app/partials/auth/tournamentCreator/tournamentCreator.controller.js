(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('TournamentCreatorCtrl', TournamentCreatorController);

    TournamentCreatorController.$inject = ['$http', 'ApiUrls', 'TournamentCreator'];
    function TournamentCreatorController($http, ApiUrls, TournamentCreator) {
        var vm = this;
        vm.tournament = {};
        vm.capacity = 0;
        vm.scrollTo = scrollTo;
        vm.createTournament = createTournament;
        vm.concatenateDateAndTime = concatenateDateAndTime;

        function concatenateDateAndTime(d, t) {
            return new Date(
                d.getFullYear(),
                d.getMonth(),
                d.getDate(),
                t.getHours(),
                t.getMinutes(),
                t.getSeconds(),
                t.getMilliseconds()
            );
        }
        
        function createTournament() {
            vm.tournament.startTime = vm.concatenateDateAndTime(vm.startDate, vm.startTime);
            vm.tournament.endTime = vm.concatenateDateAndTime(vm.endDate, vm.endTime);
            vm.tournament.backupStartTime = vm.concatenateDateAndTime(vm.backupStartDate, vm.backupEndTime);
            vm.tournament.backupEndTime = vm.concatenateDateAndTime(vm.backupEndDate, vm.backupEndTime);
            vm.tournament.capacity = {};
            vm.tournament.capacity.type = 'PLAYER';
            vm.tournament.capacity.participantCount = vm.capacity;
            vm.tournament.capacity.participantArity = 1;
            TournamentCreator.create(vm.tournament)
                .$promise.then(successCallback, failureCallback);

            function successCallback() {
                alert("DODANO!")
            }

            function failureCallback() {
                alert("BŁĄD!")
            }
        }
        
        function scrollTo(elementNumber) {
            $("#tmp-creator").scrollTo(($("#tmp-creator-content").find("> li:nth-child("+ elementNumber +")")), 1000)
        }


        $(document).ready(function () {
            $('ul.tmp-navbar > div > li').click(function (e) {
                e.preventDefault();
                $('ul.tmp-navbar > div > li').removeClass('active');
                $(this).addClass('active');
            });
        });


    }

})();
