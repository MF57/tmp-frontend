/**
 * Created by mf57 on 04.09.2016.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .config(StateConfig);

    StateConfig.$inject = ['$stateProvider'];
    function StateConfig($stateProvider) {

        $stateProvider
            .state('Dashboard', {
                url:"/dashboard",
                templateUrl: "partials/auth/dashboard/dashboard.html",
                controller: "DashboardCtrl",
                controllerAs: "vm",
                parent:"main"
            })

    }

})();