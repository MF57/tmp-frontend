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
            .state('main', {
                abstract: true,
                templateUrl: "partials/abstract/main.html",
                controller: "MainController"
            })
            .state('login', {
                controller: "MainController",
                parent:"welcome"
            })
            .state('welcome', {
                url:"/",
                templateUrl: "partials/welcome/welcome.html",
                controller: "WelcomeController",
                parent:"main"
            })
            .state('state1', {
                url:"/state1",
                templateUrl: "partials/view1/view1.html",
                controller: "View1Ctrl",
                parent:"main"
            })
            .state('state2', {
                url:"/state2",
                templateUrl: "partials/view2/view2.html",
                controller: "View2Ctrl",
                parent:"main"
            })
            .state('state3', {
                url:"/state3",
                templateUrl: "partials/view3/view3.html",
                controller: "View3Ctrl",
                parent:"main"
            })

    }
    

})();