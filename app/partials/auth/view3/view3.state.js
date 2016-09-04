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
            .state('state3', {
                url:"/state3",
                templateUrl: "partials/auth/view3/view3.html",
                controller: "View3Ctrl",
                controllerAs: "vm",
                parent:"main"
            })

    }

})();