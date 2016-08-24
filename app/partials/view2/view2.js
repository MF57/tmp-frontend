(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('View2Ctrl', View2Controller);

    View2Controller.$inject = ['$http', 'urls'];
    function View2Controller($http, urls) {
        var vm = this;
        vm.message = "";

        $scope.refresh = function () {
            $http.get(urls.coreApi + "tests").success(function (response) {
                vm.message = response;
            }).error(function () {
                vm.message = "Could not connect to TMP-Core"
            });
        };
    }

})();
