(function () {
    'use strict';

    var mainApp = angular
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

    mainApp.factory('TokenStorage', ['$window', function ($window) {
        var storageKey = 'auth_token';
        return {
            store: function (token) {
                return localStorage.setItem(storageKey, token);
            },
            retrieve: function () {
                return localStorage.getItem(storageKey);
            },
            clear: function () {
                return localStorage.removeItem(storageKey);
            },
            decode: function (token) {
                if (token === null) {
                    return null;
                }
                var base64Url = token.split('.')[1];
                var base64 = base64Url.replace('-', '+').replace('_', '/');
                return JSON.parse($window.atob(base64));
            },
            isAuthenticated: function() {
                return !(localStorage.getItem(storageKey) === null);
            }
        };
    }]);

    mainApp.config(function ($httpProvider) {
        /**
         * FYI
         * The custom "X-Requested-With" is a conventional header sent by browser clients,
         * and it used to be the default in Angular but they took it out in 1.3.0.
         * Spring Security responds to it by not sending a "WWW-Authenticate" header in a 401 response,
         * and thus the browser will not pop up an authentication dialog (which is desirable in our app since
         * we want to control the authentication).
         * @type {string}
         */
        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
    });

    mainApp.service('urls', function () {
        var enrollment = "http://localhost:8093/";
        var core = "http://tmp-core.tegess.com:8092/";
        var stats = "http://tmp-stats.tegess.com:8094/";
        var authlog = "http://tmp-authlog.tegess.com:8090/";
        var api = "api/";
        this.enrollmentApi = enrollment + api;
        this.coreApi = core + api;
        this.statsApi = stats + api;
        this.authlogApi = authlog + api;
        this.appId="5730dd4bc9e77c000189ad7a";
    });


    mainApp.factory('TokenAuthInterceptor', function ($q, TokenStorage) {
        return {
            request: function (config) {
                var authToken = TokenStorage.retrieve();
                if (authToken) {
                    config.headers['X-AUTH-TOKEN'] = authToken;
                }
                return config;
            },
            responseError: function (error) {
                if (error.status === 401 || error.status === 403) {
                    TokenStorage.clear();
                }
                return $q.reject(error);
            }
        };
    }).config(function ($httpProvider) {
        $httpProvider.interceptors.push('TokenAuthInterceptor');
    });

})();



