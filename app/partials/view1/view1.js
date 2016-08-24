(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('View1Ctrl', View1Controller);

    View1Controller.$inject = ['$http', '$scope', 'urls', 'TokenStorage'];
    function View1Controller($http, $scope, urls, TokenStorage) {
        var vm = this;
        vm.message = "";

        $scope.refresh = function () {
            $http.get(urls.enrollmentApi + "tests").success(function (response) {
                vm.message = response;
            }).error(function () {
                vm.message = "Could not connect to TMP-Enrollment"
            });
        };
        
        
        $scope.loginFunction = function () {
            $http.get(urls.authlogApi + "login/credentials?appId="+urls.appId, {
                headers : { "Authorization" : btoa($scope.login+":"+$scope.password)}
            }).then(
                function successCallback(result) {
                    console.log("Successful login - token = " + result.data.token);
                    TokenStorage.store(result.data.token);
                    alert("Successfully logged in.")
                },
                function failureCallback(result) {
                    console.log("Something went wrong, probably wrong credentials");
                });
        }
        $scope.logoutFunction = function () {
            TokenStorage.clear();
        }
    }

})();






