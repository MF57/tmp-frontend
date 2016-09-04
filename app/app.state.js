/**
 * Created by mf57 on 03.09.2016.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .config(StateConfig);


    /*
     Please use this $stateProvider only for abstract states. Standard states should be in partials folder
     */
    StateConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function StateConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('unauth', {
                abstract: true,
                templateUrl: "layouts/unauth/main.html"
            })
            .state('main', {
                abstract: true,
                templateUrl: "layouts/auth/navbar.html",
                controller: "NavbarController",
                controllerAs: "vm"
            })
            .state('state1', {
                url:"/state1",
                templateUrl: "partials/auth/view1/view1.html",
                controller: "View1Ctrl",
                controllerAs: "vm",
                parent:"main"
            })
            .state('state2', {
                url:"/state2",
                templateUrl: "partials/auth/view2/view2.html",
                controller: "View2Ctrl",
                controllerAs: "vm",
                parent:"main"
            })
            .state('state3', {
                url:"/state3",
                templateUrl: "partials/auth/view3/view3.html",
                controller: "View3Ctrl",
                controllerAs: "vm",
                parent:"main"
            })

    }


    

})();