(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('WelcomeController', WelcomeController);

    WelcomeController.$inject = ['$state', '$timeout', 'ngDialog', 'toastr', 'TokenStorage', 'LoginService', 'RegisterService'];
    function WelcomeController($state, $timeout, ngDialog, toastr, TokenStorage, LoginService, RegisterService) {
        var vm = this;

        vm.isAuthenticated = TokenStorage.isAuthenticated();
        vm.login = "";
        vm.password = "";
        vm.confirmPassword = "";
        vm.mail = "";
        vm.blurry = false;
        vm.loginSuccessful = false;
        vm.loginFailed = false;
        vm.registerSuccessful = false;

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
            vm.loginFailed = false;
            LoginService.login(vm.login, vm.password)
                .$promise.then(successCallback, failureCallback);

            function successCallback(result) {
                TokenStorage.store(result.token);
                vm.loginSuccessful = true;
                $timeout(function () {
                    ngDialog.close();
                    vm.loginSuccessful = false;
                    $state.go("state1");
                }, 1000);
            }

            function failureCallback(result) {
                vm.loginFailed = true;
            }
        }

        function registerFunction() {
            if (vm.password !== vm.confirmPassword) {
                return;
            }

            RegisterService.register(vm.login, vm.password, vm.mail)
                .$promise.then(successCallback, failureCallback);

            function successCallback() {
                vm.registerSuccessful = true;
                $timeout(function () {
                    ngDialog.close();
                    vm.registerSuccessful = false;
                    showLoginPopup();
                }, 2500);
            }

            function failureCallback() {
                toastr.error("Something went wrong, please try again");
            }

        }

    }

})();