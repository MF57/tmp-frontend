(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('View3Ctrl', View3Controller);

    View3Controller.$inject = ['$http', 'ApiUrls'];
    function View3Controller($http, ApiUrls) {
        var vm = this;
        vm.message = "";
        vm.refresh = refresh;

        function refresh() {
            $http.get(ApiUrls.statsApi + "tests").success(function (response) {
                vm.message = response;
            }).error(function () {
                vm.message = "Could not connect to TMP-Stats"
            });
        }
    }

})();
