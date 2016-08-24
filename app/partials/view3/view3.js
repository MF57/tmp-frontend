(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('View3Ctrl', View3Controller);

    View3Controller.$inject = ['$http', '$scope', 'urls'];
    function View3Controller($http, $scope, urls) {
        var vm = this;
        vm.message = "";

        $scope.refresh = function () {
            $http.get(urls.statsApi + "tests").success(function (response) {
                vm.message = response;
            }).error(function () {
                vm.message = "Could not connect to TMP-Stats"
            });
        };
    }

})();
