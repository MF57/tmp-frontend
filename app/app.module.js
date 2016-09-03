(function () {
    'use strict';

    var mainApp = angular
        .module('myApp', ['AuthModule', 'ui.router', 'ngDialog', 'ngAnimate', 'toastr'])
        .config(BaseConfiguration);

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

   
    
    mainApp.config(function(toastrConfig) {
        angular.extend(toastrConfig, {
            autoDismiss: false,
            containerId: 'toast-container',
            newestOnTop: true,
            positionClass: 'toast-top-full-width',
            preventDuplicates: false,
            preventOpenDuplicates: false,
            target: 'body',
            timeOut: 1500,
            extendedTimeOut: 500
        });
    });


})();



