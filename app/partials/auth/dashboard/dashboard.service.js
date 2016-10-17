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
            tournaments.ownerTournaments = [
                {
                    tournamentId: "507c7f79bcf86cd7994f6c0e",
                    name: "Tournament 1",
                    beginDate: "2016-12-19 19:00",
                    level: "UBERS",
                    status: "ENROLLMENT"
                },
                {
                    tournamentId: "507c7f79bcf86cd7994f6c1e",
                    name: "Tournament 2",
                    beginDate: "2016-05-20 21:00",
                    level: "OVERLY USED",
                    status: "ENROLLMENT"
                },
                {
                    tournamentId: "507c7f79bcf86cd7994f6c2e",
                    name: "Tournament 3",
                    beginDate: "2016-10-29 18:00",
                    level: "ANYTHING GOES",
                    status: "ENROLLMENT"
                },
                {
                    tournamentId: "507c7f79bcf86cd7994f6c3e",
                    name: "Tournament 4",
                    beginDate: "2016-02-02 12:00",
                    level: "OVERLY USED",
                    status: "ENROLLMENT"
                },
                {
                    tournamentId: "507c7f79bcf86cd7994f6c4e",
                    name: "Tournament 5",
                    beginDate: "2016-10-29 18:00",
                    level: "UBERS",
                    status: "ENROLLMENT"
                },
                {
                    tournamentId: "507c7f79bcf86cd7994f6c5e",
                    name: "Tournament 6",
                    beginDate: "2016-10-09 09:00",
                    level: "NEVER USED",
                    status: "ENROLLMENT"
                },
                {
                    tournamentId: "507c7f79bcf86cd7994f6c6e",
                    name: "Tournament 7",
                    beginDate: "2016-11-19 18:00",
                    level: "UBERS",
                    status: "ENROLLMENT"
                },
            ];
            tournaments.refereeTournaments = [];
            tournaments.participantTournaments = [
                {
                    tournamentId: "507c7f79bcf86cd7994f6c7e",
                    name: "Tournament 11",
                    beginDate: "2016-12-19 19:00",
                    level: "UBERS",
                    status: "ENROLLMENT"
                },
                {
                    tournamentId: "507c7f79bcf86cd7994f6c8e",
                    name: "Tournament 12",
                    beginDate: "2016-05-20 21:00",
                    level: "OVERLY USED",
                    status: "ENROLLMENT"
                },
                {
                    tournamentId: "507c7f79bcf86cd7994f6c9e",
                    name: "Tournament 13",
                    beginDate: "2016-10-29 18:00",
                    level: "ANYTHING GOES",
                    status: "ENROLLMENT"
                }];
            return tournaments;
        }

        return service;

    }


})();