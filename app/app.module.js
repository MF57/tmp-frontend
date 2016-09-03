(function () {
    'use strict';

    angular
        .module('myApp', ['AuthModule', 'NotificationModule', 'ui.router', 'ngDialog', 'ngAnimate'])
        .config(BaseConfiguration);

    /*
        Please use this $stateProvider only for abstract states. Standard states should be in partials folder
     */
    BaseConfiguration.$inject = ['$stateProvider', '$urlRouterProvider'];
    function BaseConfiguration($stateProvider, $urlRouterProvider) {
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



