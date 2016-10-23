(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('EnrollMeCtrl', EnrollMeController);

    EnrollMeController.$inject = ['EnrollMe', 'TokenStorage'];
    function EnrollMeController(EnrollMe, TokenStorage) {
        var vm = this;
        vm.tournaments = [];
        vm.loadAll = loadAll;

        function loadAll() {
            vm.tournaments = EnrollMe.loadAll(TokenStorage.decode(TokenStorage.retrieve()).username)
        }

        vm.loadAll();
    }

})();
