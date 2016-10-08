(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['TokenStorage', 'LoginService', 'ApiUrls', 'UserService', '$state'];
    function NavbarController(TokenStorage, LoginService, ApiUrls, UserService, $state) {
        var vm = this;
        
        vm.isAuthenticated = TokenStorage.isAuthenticated();
        vm.username = TokenStorage.decode(TokenStorage.retrieve()).username;
        vm.logoutFunction = logoutFunction;
        vm.refreshUserData = refreshUserData;
        vm.showUserProfile = showUserProfile;
        vm.menuExpanded = true;
        vm.workspaceBorder = true;

        refreshUserData();

        $(document).ready(function () {
            $('ul.nav > li').click(function (e) {
                e.preventDefault();
                $('ul.nav > li').removeClass('active');
                $(this).addClass('active');
            });
        });
        
        function showUserProfile() {
            $state.go("userprofile");
        }

        function refreshUserData() {
            UserService.getUser(vm.username).$promise.then(successCallback, failueCallback);

            function successCallback(result) {
                vm.userData = result;
                console.log(vm.userData);
                vm.userPictureUrl = vm.userData.pictureURL;
            }

            function failueCallback(result) {
                console.log("Can't get user data.")
            }

        }

        function logoutFunction() {
            LoginService.logout();
        }

    }

})();