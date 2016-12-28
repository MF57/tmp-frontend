/**
 * Created by mf57 on 23.10.2016.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .factory('EnrollMe', EnrollMeService);


    EnrollMeService.$inject = ['ApiUrls', '$resource'];
    function EnrollMeService(ApiUrls, $resource) {
        var resourceUrl = ApiUrls.enrollmentApi + "tournaments";
        var service = {
            loadAll: loadAll
        };

        function loadAll() {
            return $resource(resourceUrl + "/enrollable", {}, {
                'query': { method: 'GET'}
            }).query();
        }


        return service;

    }


})();