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
            .state('EnrollMe', {
                url:"/enroll-me",
                templateUrl: "partials/auth/enrollMe/enrollMe.html",
                controller: "EnrollMeCtrl",
                controllerAs: "vm",
                parent:"main"
            })

    }

})();