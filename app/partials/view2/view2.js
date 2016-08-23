(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('View2Ctrl', View2Controller);

    View2Controller.$inject = ['$http'];
    function View2Controller($http) {
        var vm = this;
        vm.message = "";

        $http.get("http://tmp-core.tegess.com:8092/api/tests").success(function (response) {
            vm.message = response;
        }).error(function () {
            vm.message = "Could not connect to TMP-Core"
        });
    }

})();
