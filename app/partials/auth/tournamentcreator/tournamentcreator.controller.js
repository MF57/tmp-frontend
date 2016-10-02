(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('TournamentCreatorCtrl', TournamentCreatorController);

    TournamentCreatorController.$inject = ['$http', 'ApiUrls'];
    function TournamentCreatorController($http, ApiUrls) {
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
