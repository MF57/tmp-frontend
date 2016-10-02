/**
 * Created by Szymek on 02/10/2016.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('TournamentCreatorController', TournamentCreatorController);

    TournamentCreatorController.$inject = ['$http', 'ApiUrls', 'TokenStorage', 'UserService', '$scope', '$window'];
    function TournamentCreatorController($http, ApiUrls, TokenStorage, UserService, $scope, $window) {
        var vm = this;
    }

})();