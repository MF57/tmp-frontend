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
            return [
                // {
                //     tournamentId: "507c7f79bcf86cd7994f6c0e",
                //     name: "Tournament 1",
                //     beginDate: "2016-12-19 19:00",
                //     level: "UBERS",
                //     status: "ENROLLMENT"
                // },
                // {
                //     tournamentId: "507c7f79bcf86cd7994f6c1e",
                //     name: "Tournament 2",
                //     beginDate: "2016-05-20 21:00",
                //     level: "OVERLY USED",
                //     status: "ENROLLMENT"
                // }
            ];
        }


        return service;

    }


})();