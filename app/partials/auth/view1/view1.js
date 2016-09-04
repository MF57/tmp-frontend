(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('View1Ctrl', View1Controller);

    View1Controller.$inject = ['$http', 'ApiUrls', 'TokenStorage'];
    function View1Controller($http, ApiUrls, TokenStorage) {
        var vm = this;
        vm.message = "";
        vm.refresh = refresh;


        function refresh() {
            $http.get(ApiUrls.enrollmentApi + "tests").success(function (response) {
                vm.message = response;
            }).error(function () {
                vm.message = "Could not connect to TMP-Enrollment"
            });
        }
    }

})();






