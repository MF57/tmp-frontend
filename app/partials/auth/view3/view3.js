(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('View3Ctrl', View3Controller);

    View3Controller.$inject = ['$http', '$scope', 'ApiUrls'];
    function View3Controller($http, $scope, ApiUrls) {
        $scope.message = "";

        $scope.refresh = function () {
            $http.get(ApiUrls.statsApi + "tests").success(function (response) {
                $scope.message = response;
            }).error(function () {
                $scope.message = "Could not connect to TMP-Stats"
            });
        };
    }

})();
