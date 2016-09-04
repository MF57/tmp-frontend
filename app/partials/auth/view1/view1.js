(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('View1Ctrl', View1Controller);

    View1Controller.$inject = ['$http', '$scope', 'ApiUrls', 'TokenStorage'];
    function View1Controller($http, $scope, ApiUrls, TokenStorage) {
        $scope.message = "";

        $scope.refresh = function () {
            $http.get(ApiUrls.enrollmentApi + "tests").success(function (response) {
                $scope.message = response;
            }).error(function () {
                $scope.message = "Could not connect to TMP-Enrollment"
            });
        };
    }

})();






