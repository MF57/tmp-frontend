(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('MainController', MainController);

    MainController.$inject = ['TokenStorage', 'toastr'];
    function MainController(TokenStorage, toastr) {
        var vm = this;
        
        vm.isAuthenticated = TokenStorage.isAuthenticated();
        vm.logoutFunction = logoutFunction;

        function logoutFunction() {
            toastr.success("See you, " + TokenStorage.decode(TokenStorage.retrieve()).username);
            TokenStorage.clear();
        }

    }

})();