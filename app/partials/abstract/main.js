(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('MainController', MainController);

    MainController.$inject = ['$http', '$scope', 'ApiUrls', 'TokenStorage', 'ngDialog', 'toastr'];
    function MainController($http, $scope, ApiUrls, TokenStorage, ngDialog, toastr) {

        $scope.isAuthenticated = TokenStorage.isAuthenticated;

        $scope.showLoginPopup = function() {
            ngDialog.open({
                controller:"MainController",
                template:"partials/login/login.html",
                className: "ngdialog-theme-default",
                width:"250px"
            });
        };

        $scope.loginFunction = function () {
            $http.get(ApiUrls.authlogApi + "login/credentials?appId="+ApiUrls.appId, {
                headers : { "Authorization" : btoa($scope.login+":"+$scope.password)}
            }).then(
                function successCallback(result) {
                    console.log("Successful login - token = " + result.data.token);
                    TokenStorage.store(result.data.token);
                    ngDialog.close();
                    toastr.success("Welcome, " + TokenStorage.decode(result.data.token).username);
                },
                function failureCallback(result) {
                    toastr.error("Something went wrong, please try again");
                });
        };

        $scope.logoutFunction = function () {
            toastr.success("See you, " + TokenStorage.decode(TokenStorage.retrieve()).username);
            TokenStorage.clear();

        }

    }

})();