(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('EnrollMeCtrl', EnrollMeController);

    EnrollMeController.$inject = ['EnrollMe',  'TokenStorage', 'ngDialog', '$state'];
    function EnrollMeController(EnrollMe, TokenStorage, ngDialog, $state) {
        const vm = this;
        vm.tournaments = [];
        vm.selectedTournament = {};
        vm.username = TokenStorage.decode(TokenStorage.retrieve()).username;
        vm.loadAll = loadAll;
        vm.showEnrollmentPopup = showEnrollmentPopup;


        function showEnrollmentPopup(tournament) {
            vm.selectedTournament = tournament;
            const dialog = ngDialog.open({
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
                    vm.selectedTournament.enrollment.enrolledParticipantIds.push(vm.username);
                    EnrollMe.enroll(vm.selectedTournament.id).$promise.then(successCallback, failureCallback);
                }

                function successCallback(data) {
                    $state.go('Tournament', {'tournamentId' : vm.selectedTournament.id})
                }

                function failureCallback(error) {
                    alert("BLAD PRZY EDYCJI TURNIEJU")
                }
            })
        }

        function loadAll() {
            EnrollMe.loadAll()
                .$promise.then(successCallback, failureCallback);


            function successCallback(data) {
                vm.tournaments = data;
            }

            function failureCallback() {
                console.log("BLAD PRZY WYCIAGANIU TURNIEJU")
            }
        }

        vm.loadAll();
    }

})();
