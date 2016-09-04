(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('View2Ctrl', View2Controller);

    View2Controller.$inject = ['$http', '$scope', 'ApiUrls'];
    function View2Controller($http, $scope, ApiUrls) {
        $scope.message = "";

        $scope.refresh = function () {
            $http.get(ApiUrls.coreApi + "tests").success(function (response) {
                $scope.message = response;
            }).error(function () {
                $scope.message = "Could not connect to TMP-Core"
            });
        };
    }

})();
