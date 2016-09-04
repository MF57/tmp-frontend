/**
 * Created by Szymek on 04/09/16.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .config(StateConfig);

    StateConfig.$inject = ['$stateProvider'];
    function StateConfig($stateProvider) {

        $stateProvider
            .state('register', {
                controller: "WelcomeController",
                controllerAs: 'vm',
                parent: "welcome"
            })

    }

})();