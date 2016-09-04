(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('MainController', MainController);

    MainController.$inject = ['$http', '$scope', 'ApiUrls', 'TokenStorage', 'ngDialog', 'toastr'];
    function MainController($http, $scope, ApiUrls, TokenStorage, ngDialog, toastr) {

        $scope.isAuthenticated = TokenStorage.isAuthenticated;


        $scope.logoutFunction = function () {
            toastr.success("See you, " + TokenStorage.decode(TokenStorage.retrieve()).username);
            TokenStorage.clear();

        }

    }

})();