(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('WelcomeController', WelcomeController);

    WelcomeController.$inject = ['$http', '$scope', 'urls', 'TokenStorage'];
    function WelcomeController($http, $scope, urls, TokenStorage) {
        var vm = this;
        

    }

})();