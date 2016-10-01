/**
 * Created by Szymek on 27/09/2016.
 */
(function () {
    'use strict';
    angular
        .module('AuthModule')
        .factory('UserService', UserService);

    UserService.$inject = ['$resource', 'TokenStorage', 'ApiUrls'];

    function UserService ($resource, TokenStorage, ApiUrls) {
        var service = {
            getUser: getUser,
            saveUser: saveUser
        };

        var userApiUrl =  `${ApiUrls.authlogApi}applications/${ApiUrls.appId}/users`;

        function getUser(userId) {
            return $resource(`${userApiUrl}/${userId}`, {}, {
                'query': {
                    method: 'GET'
                }
            }).query();
        }
        
        function saveUser(user) {
            return $resource(`${userApiUrl}/${user.username}`, {}, {
                'query': {
                    method: 'PUT'
                }
            }).query({
                mail: user.mail,
                gender: user.gender,
                locale: user.locale
            });
        }

        return service;

    }


})();