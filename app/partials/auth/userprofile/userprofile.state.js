/**
 * Created by Szymek on 28/09/2016.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .config(StateConfig);

    StateConfig.$inject = ['$stateProvider'];
    function StateConfig($stateProvider) {
        $stateProvider
            .state('userprofile', {
                url:"/userprofile",
                templateUrl: "partials/auth/userprofile/userprofile.html",
                controller: "UserProfileController",
                controllerAs: "vm",
                parent:"main"
            })

    }

})();