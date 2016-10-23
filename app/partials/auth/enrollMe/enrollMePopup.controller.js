/**
 * Created by mf57 on 23.10.2016.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('EnrollMePopupCtrl', EnrollMePopupController);

    EnrollMePopupController.$inject = ['EnrollMe', '$scope'];
    function EnrollMePopupController(EnrollMe, $scope) {
        var vm = this;
        vm.tournament = {};
        vm.loadAll = loadAll;
        vm.closeDialog = closeDialog;


        function loadAll() {
            vm.tournament = $scope.ngDialogData.tournament;
        }

        function closeDialog(result) {
            $scope.closeThisDialog(result);
        }

        vm.loadAll();
    }


})();