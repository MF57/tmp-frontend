(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('WelcomeController', WelcomeController);

    WelcomeController.$inject = ['$state', 'ngDialog', 'toastr', 'TokenStorage', 'LoginService', 'RegisterService'];
    function WelcomeController($state, ngDialog, toastr, TokenStorage, LoginService, RegisterService) {
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
            LoginService.login(vm.login, vm.password)
                .$promise.then(successCallback, failureCallback);

            function successCallback(result) {
                TokenStorage.store(result.token);
                ngDialog.close();
                $state.go("state1");
                toastr.success("Welcome, " +  TokenStorage.decode(result.token).username);
            }

            function failureCallback() {
                toastr.error("Something went wrong, please try again");
            }
        }

        function registerFunction() {
            if (vm.password !== vm.confirmPassword) {
                return;
            }

            RegisterService.register(vm.login, vm.password, vm.mail)
                .$promise.then(successCallback, failureCallback);

            function successCallback() {
                ngDialog.close();
                $state.go("welcome");
                toastr.success("Now you can log in")
            }

            function failureCallback() {
                toastr.error("Something went wrong, please try again");
            }

        }

    }

})();