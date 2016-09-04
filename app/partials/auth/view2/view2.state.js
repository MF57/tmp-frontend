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
            .state('state2', {
                url:"/state2",
                templateUrl: "partials/auth/view2/view2.html",
                controller: "View2Ctrl",
                controllerAs: "vm",
                parent:"main"
            })

    }

})();