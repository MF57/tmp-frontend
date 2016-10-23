/**
 * Created by mf57 on 02.10.2016.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .factory('Dashboard', DashboardService);


    DashboardService.$inject = ['ApiUrls', '$resource'];
    function DashboardService(ApiUrls, $resource) {
        var resourceUrl = ApiUrls.enrollmentApi + "tournaments/my";
        var service = {
            loadAll: loadAll
        };

        function loadAll() {
            return $resource(resourceUrl, {}, {
                'query': { method: 'GET'}
            }).query();
        }

        return service;

    }


})();