(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('View3Ctrl', View3Controller);

    View3Controller.$inject = ['$http'];
    function View3Controller($http) {
        var vm = this;
        vm.message = "";

        $http.get("http://tmp-stats.tegess.com:8094/api/tests").success(function (response) {
            vm.message = response;
        }).error(function () {
            vm.message = "Could not connect to TMP-Stats"
        });
    }

})();
