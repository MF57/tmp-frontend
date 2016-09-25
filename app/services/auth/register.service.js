/**
 * Created by mf57 on 25.09.2016.
 */
(function () {
    'use strict';
    angular
        .module('AuthModule')
        .factory('RegisterService', RegisterService);

    RegisterService.$inject = ['$resource', 'ApiUrls'];

    function RegisterService ($resource, ApiUrls) {
        var service = {
            register: register
        };

        var registerUrl =  ApiUrls.authlogApi + "applications/" + ApiUrls.appId + "/users";

        function register(login, password, mail) {
            return $resource(registerUrl, {}).save({
                username: login,
                password: password,
                mail: mail
            });
        }

        return service;

    }



})();