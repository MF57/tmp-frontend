/**
 * Created by mf57 on 25.09.2016.
 */
(function () {
    'use strict';
    angular
        .module('AuthModule')
        .factory('LoginService', LoginService);

    LoginService.$inject = ['$resource', 'TokenStorage', 'ApiUrls'];

    function LoginService ($resource, TokenStorage, ApiUrls) {
        var service = {
            login: login,
            logout: logout
        };

        var loginUrl =  ApiUrls.authlogApi + "login/credentials?appId=" + ApiUrls.appId;


        return service;

        function login(login, password) {
            return $resource(loginUrl, {}, {
                'query': {
                    method: 'GET',
                    headers: {"Authorization": btoa(login + ":" + password)}
                }
            }).query();
        }

        function logout() {
            TokenStorage.clear();
        }


        // return $resource(loginUrl, {}, {
        //     'login': {
        //         method: 'GET',
        //         isArray: false,
        //         headers: {"Authorization": btoa(vm.login + ":" + vm.password)}
        //     }
        // });
    }
    

})();