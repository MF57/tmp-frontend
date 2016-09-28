/**
 * Created by Szymek on 28/09/2016.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('UserProfileController', UserProfileController);

    UserProfileController.$inject = ['$state', '$timeout', 'ngDialog', 'TokenStorage', 'UserService'];
    function UserProfileController($state, $timeout, ngDialog, TokenStorage, UserService) {
        var vm = this;
        
        vm.refreshUserData = refreshUserData;

        refreshUserData();

        function refreshUserData() {
            UserService.getUser(TokenStorage.decode(TokenStorage.retrieve()).username)
                .$promise.then(successCallback, failueCallback);
            function successCallback(result) {
                vm.user = result;
            }
            function failueCallback(result) {
                console.log("Can't get user data.")
            }
        }


    }

})();