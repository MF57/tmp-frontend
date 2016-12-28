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
        var resourceUrl = ApiUrls.enrollmentApi + "tournaments/";
        var service = {
            loadAll: loadAll,
            update: update,
            remove: remove

        };

        function loadAll(tournamentId, username) {
            return $resource(resourceUrl + tournamentId, {}, {
                'query': { method: 'GET'}
            }).query();
        }

        function update(tournament) {
            return $resource(resourceUrl + tournament.id, {}, {
                'update': { method: 'PUT'}
            }).update(tournament);
        }

        function remove(tournamentId) {
            return $resource(resourceUrl + tournamentId, {}, {
                'delete': { method: 'DELETE'}
            }).delete();
        }



        return service;

    }


})();