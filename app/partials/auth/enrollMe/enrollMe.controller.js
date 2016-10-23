(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('EnrollMeCtrl', EnrollMeController);

    EnrollMeController.$inject = ['EnrollMe', 'TokenStorage', 'ngDialog', '$state'];
    function EnrollMeController(EnrollMe, TokenStorage, ngDialog, $state) {
        var vm = this;
        vm.tournaments = [];
        vm.selectedTournament = {};
        vm.username = TokenStorage.decode(TokenStorage.retrieve()).username;
        vm.loadAll = loadAll;
        vm.showEnrollmentPopup = showEnrollmentPopup;


        function showEnrollmentPopup(tournament) {
            vm.selectedTournament = tournament;
            var dialog = ngDialog.open({
                controller: "EnrollMePopupCtrl",
                controllerAs: "vm",
                template: "partials/auth/enrollMe/enrollMePopup.html",
                className: "ngdialog-theme-default welcome-dialog",
                width: "100%",
                data: {
                    tournament: tournament
                }
            });
            dialog.closePromise.then((result) => {
                if(result.value === true) {
                    $state.go('Tournament', {'tournamentId' : vm.selectedTournament.tournamentId})
                }
            })
        }

        function loadAll() {
            vm.tournaments = EnrollMe.loadAll(vm.username)
        }

        vm.loadAll();
    }

})();
