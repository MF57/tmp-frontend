(function () {
    'use strict';
    angular
        .module('myApp')
        .factory('TournamentCreator', TournamentCreatorService);


    TournamentCreatorService.$inject = ['ApiUrls', '$resource'];
    function TournamentCreatorService(ApiUrls, $resource) {
        var service = {
            create: create
        };

        function create(tournament) {
            return $resource(`${ApiUrls.enrollmentApi}tournaments`, {}, {
                'save': {
                    method: 'POST'
                }
            }).save(tournament);
        }

        return service;

    }


})();