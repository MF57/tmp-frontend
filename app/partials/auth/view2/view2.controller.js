(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('View2Ctrl', View2Controller);

    View2Controller.$inject = ['$http', 'ApiUrls'];
    function View2Controller($http, ApiUrls) {
        var vm = this;
        vm.message = "";
        vm.refresh = refresh;

        function refresh() {
            $http.get(ApiUrls.coreApi + "tests").success(function (response) {
                vm.message = response;
            }).error(function () {
                vm.message = "Could not connect to TMP-Core"
            });
        }
    }

})();
