(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('WelcomeController', WelcomeController);

    WelcomeController.$inject = ['$http', '$state', 'ApiUrls', 'TokenStorage', 'ngDialog', 'toastr'];
    function WelcomeController($http, $state, ApiUrls, TokenStorage, ngDialog, toastr) {
        var vm = this;

        vm.isAuthenticated = TokenStorage.isAuthenticated();
        vm.login = "";
        vm.password = "";

        vm.loginFunction = loginFunction;
        vm.showLoginPopup = showLoginPopup;
        vm.showRegisterPopup = showRegisterPopup;
        vm.registerFunction = registerFunction;
        
        function showLoginPopup() {
            ngDialog.open({
                controller:"WelcomeController",
                controllerAs: "vm",
                template:"partials/unauth/login/login.html",
                className: "ngdialog-theme-default",
                width:"250px"
            });
        }

        function showRegisterPopup() {
            ngDialog.open({
                controller:"WelcomeController",
                controllerAs: "vm",
                template:"partials/unauth/register/register.html",
                className: "ngdialog-theme-default",
                width:"250px"
            });
        }

        function loginFunction() {
            $http.get(ApiUrls.authlogApi + "login/credentials?appId="+ApiUrls.appId, {
                headers : { "Authorization" : btoa(vm.login+":"+vm.password)}
            }).then(
                function successCallback(result) {
                    console.log("Successful login - token = " + result.data.token);
                    TokenStorage.store(result.data.token);
                    ngDialog.close();
                    $state.go("state1");
                    toastr.success("Welcome, " + TokenStorage.decode(result.data.token).username);
                },
                function failureCallback(result) {
                    toastr.error("Something went wrong, please try again");
                });
        }

        function registerFunction() {
            $http.post(ApiUrls.authlogApi + "applications/"+ApiUrls.appId+"/users", {
                username:vm.login,
                password:vm.password,
                mail:vm.mail,
                picture:vm.picture
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