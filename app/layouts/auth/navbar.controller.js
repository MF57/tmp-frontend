(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['TokenStorage', 'LoginService', 'ApiUrls'];
    function NavbarController(TokenStorage, LoginService, ApiUrls) {
        var vm = this;
        
        vm.isAuthenticated = TokenStorage.isAuthenticated();
        vm.logoutFunction = logoutFunction;
        vm.username = TokenStorage.decode(TokenStorage.retrieve()).username;
        vm.userPictureUrl = ApiUrls.authlogApi + "applications/" + ApiUrls.appId + "/users/" + vm.username + "/photo/" + "0969d37a-facd-4a0d-84ca-50cbd33969e1";

        $(document).ready(function () {
            $('ul.nav > li').click(function (e) {
                e.preventDefault();
                $('ul.nav > li').removeClass('active');
                $(this).addClass('active');
            });
        });

        function logoutFunction() {
          //  toastr.success("See you, " + TokenStorage.decode(TokenStorage.retrieve()).username);
            LoginService.logout();
        }

    }

})();