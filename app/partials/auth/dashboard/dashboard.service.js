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
        var resourceUrl = ApiUrls.enrollmentApi + "";
        var service = {
            loadAll: loadAll
        };

        function loadAll() {
            var tournaments = {};
            tournaments.ownerTournaments = ['Tournament 1', 'Tournament2', 'Tournament3', 'Tournament 4', 'Tournament5', 'Tournament6', 'Tournament7'];
            tournaments.refereeTournaments = [];
            tournaments.participantTournaments = ['Tournament 1', 'Tournament2', 'Tournament3'];
            return tournaments;
        }

        return service;

    }
    

})();