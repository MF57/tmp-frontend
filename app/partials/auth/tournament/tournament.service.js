/**
 * Created by mf57 on 17.10.2016.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .factory('Tournament', TournamentService);


    TournamentService.$inject = ['ApiUrls', '$resource'];
    function TournamentService(ApiUrls, $resource) {
        var resourceUrl = ApiUrls.enrollmentApi + "";
        var service = {
            loadAll: loadAll
        };

        function loadAll(tournamentId, username) {
            var role = checkUserPrivilages(tournamentId, username);
            var tournament = {
                tournamentId: tournamentId,
                name: "ChampionsLeague",
                status: "ENROLLMENT",
                level: "UBERS",
                discipline: "volleyball",
                beginDate: "2015-12-10 18:00",
                endDate: "2015-12-11 18:00",
                userRole: role
            };

            if (role === "OWNER") {
                tournament.maxParticipants = 16;
                tournament.participants = ["Real Madrid", "FC Barcelona", "Arsenal Londyn"];

            }

            return tournament;
        }

        function checkUserPrivilages(tournamentId, username) {
            return Math.random() >= 0.5 ? "OWNER" : "PARTICIPANT";
        }

        return service;

    }


})();