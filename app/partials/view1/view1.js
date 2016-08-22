(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('View1Ctrl', View1Controller);

    View1Controller.$inject = ['$http'];
    function View1Controller($http) {
        var vm = this;
        vm.message = "";

        $http.get("http://localhost:8093/api/tests").success(function (response) {
            vm.message = response;
        }).error(function () {
            vm.message = "Could not connect to TMP-Enrollment"
        });
    }

})();






