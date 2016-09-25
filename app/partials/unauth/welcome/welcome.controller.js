(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('WelcomeController', WelcomeController);

    WelcomeController.$inject = ['$http', '$state', 'ApiUrls', 'TokenStorage', 'ngDialog', 'toastr', 'LoginService'];
    function WelcomeController($http, $state, ApiUrls, TokenStorage, ngDialog, toastr, LoginService) {
        var vm = this;

        vm.isAuthenticated = TokenStorage.isAuthenticated();
        vm.login = "";
        vm.password = "";
        vm.confirmPassword = "";
        vm.mail = "";
        vm.blurry = false;

        vm.loginFunction = loginFunction;
        vm.showLoginPopup = showLoginPopup;
        vm.showRegisterPopup = showRegisterPopup;
        vm.registerFunction = registerFunction;


        function showLoginPopup() {
            vm.blurry = true;
            var dialog = ngDialog.open({
                controller: "WelcomeController",
                controllerAs: "vm",
                template: "partials/unauth/login/login.html",
                className: "ngdialog-theme-default welcome-dialog",
                width: "100%"
            });
            dialog.closePromise.then(() => vm.blurry = false)
        }

        function showRegisterPopup() {
            vm.blurry = true;
            var dialog = ngDialog.open({
                controller: "WelcomeController",
                controllerAs: "vm",
                template: "partials/unauth/register/register.html",
                className: "ngdialog-theme-default welcome-dialog",
                width: "100%"
            });
            dialog.closePromise.then(() => vm.blurry = false)

        }

        function loginFunction() {
            LoginService.login(vm.login, vm.password).$promise.then(
                function successCallback(result) {
                    TokenStorage.store(result.token);
                    ngDialog.close();
                    $state.go("state1");
                 //   toastr.success("Welcome, " + );
                    //TokenStorage.decode(result.token).username
                },
                function failureCallback() {
                    toastr.error("Something went wrong, please try again");
                });
        }

        function registerFunction() {
            if (vm.password !== vm.confirmPassword) {
                return;
            }
            $http.post(ApiUrls.authlogApi + "applications/" + ApiUrls.appId + "/users", {
                username: vm.login,
                password: vm.password,
                mail: vm.mail
            }).then(
                function successCallback(result) {
                    ngDialog.close();
                    $state.go("welcome");
                    toastr.success("Now you can log in")
                },
                function failureCallback(result) {
                    toastr.error("Something went wrong, please try again");
                });

        }

    }

})();