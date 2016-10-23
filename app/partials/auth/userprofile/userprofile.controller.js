/**
 * Created by Szymek on 28/09/2016.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('UserProfileController', UserProfileController);

    UserProfileController.$inject = ['$http', 'ApiUrls', 'TokenStorage', 'UserService', '$scope', '$window'];
    function UserProfileController($http, ApiUrls, TokenStorage, UserService, $scope, $window) {
        var vm = this;
        
        vm.picture = {};
        vm.loadAll = loadAll;
        vm.saveChanges = saveChanges;
        vm.uploadPicture = uploadPicture;
        vm.loadAll = loadAll;

        $scope.$watch(function () {
            return vm.picture;
        }, uploadPicture);

        function uploadPicture() {
            var reader = new FileReader();
            reader.onload = function (e) {
                vm.user.pictureURL = e.target.result;
                $scope.$apply();
            };
            if(vm.picture instanceof Blob){
                reader.readAsDataURL(vm.picture);
            }
        }

        function saveChanges() {
            var form = new FormData();
            form.append("file", vm.picture);
            var username = TokenStorage.decode(TokenStorage.retrieve()).username;
            $http.post(`${ApiUrls.authlogApi}applications/${ApiUrls.appId}/users/${username}/photo`,
                form, {
                    transformRequest: angular.identity,
                    headers: {'Content-Type': undefined}
                }).then(
                function successCallback(result) {
                    UserService.saveUser(vm.user)
                        .$promise.then(successCallback, failureCallback);
                    function successCallback(result) {
                        $window.location.reload();
                    }
                    function failureCallback(result) {
                        console.log("Can't update user.")
                    }
                },
                function failureCallback(result) {
                    console.log("Error during changing picture");
                });

        }
        
        function loadAll() {
            UserService.getUser(TokenStorage.decode(TokenStorage.retrieve()).username)
                .$promise.then(successCallback, failueCallback);
            function successCallback(result) {
                vm.user = result;
            }
            function failueCallback(result) {
                console.log("Can't get user data.")
            }
        }

        vm.loadAll();


    }

})();