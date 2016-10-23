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
        var resourceUrl = ApiUrls.enrollmentApi + "";
        var service = {
            loadAll: loadAll
        };

        function loadAll(username) {
            return ["Tournament1", "Tournament2"];
        }


        return service;

    }


})();