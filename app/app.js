(function () {
    'use strict';

    angular
        .module('myApp', ['ui.router'])
        .config(baseConfiguration);

    baseConfiguration.$inject = ['$stateProvider', '$urlRouterProvider'];
    function baseConfiguration($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/state1");

        $stateProvider
            .state('state1', {
                url: "/state1",
                templateUrl: "partials/view1/view1.html",
                controller: "View1Ctrl",
                controllerAs: "ctrl1"
            })
            .state('state2', {
                url: "/state2",
                templateUrl: "partials/view2/view2.html",
                controller: "View2Ctrl",
                controllerAs: "ctrl2"
            })
            .state('state3', {
                url: "/state3",
                templateUrl: "partials/view3/view3.html",
                controller: "View3Ctrl",
                controllerAs: "ctrl3"
            })

    }

})();



