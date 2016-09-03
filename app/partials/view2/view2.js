(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('View2Ctrl', View2Controller);

    View2Controller.$inject = ['$http', '$scope', 'urls'];
    function View2Controller($http, $scope, urls) {
        $scope.message = "";

        $scope.refresh = function () {
            $http.get(urls.coreApi + "tests").success(function (response) {
                $scope.message = response;
            }).error(function () {
                $scope.message = "Could not connect to TMP-Core"
            });
        };
    }

})();
