(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('EnrollMeCtrl', EnrollMeController);

    EnrollMeController.$inject = ['$http', 'ApiUrls'];
    function EnrollMeController($http, ApiUrls) {
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
