(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('View1Ctrl', View1Controller);

    View1Controller.$inject = ['$http', '$scope', 'urls', 'TokenStorage'];
    function View1Controller($http, $scope, urls, TokenStorage) {
        $scope.message = "";

        $scope.refresh = function () {
            $http.get(urls.enrollmentApi + "tests").success(function (response) {
                $scope.message = response;
            }).error(function () {
                $scope.message = "Could not connect to TMP-Enrollment"
            });
        };
    }

})();






