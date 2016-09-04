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
            .state('state1', {
                url:"/state1",
                templateUrl: "partials/auth/view1/view1.html",
                controller: "View1Ctrl",
                controllerAs: "vm",
                parent:"main"
            })

    }

})();