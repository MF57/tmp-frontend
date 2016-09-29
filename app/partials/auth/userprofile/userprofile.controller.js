/**
 * Created by Szymek on 28/09/2016.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('UserProfileController', UserProfileController);

    UserProfileController.$inject = ['$http', 'ApiUrls', 'TokenStorage', 'UserService', '$scope'];
    function UserProfileController($http, ApiUrls, TokenStorage, UserService, $scope) {
        var vm = this;
        
        vm.picture = {};
        vm.refreshUserData = refreshUserData;
        vm.changePicture = changePicture;
        vm.uploadPicture = uploadPicture;

        refreshUserData();

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

        function changePicture() {
            var form = new FormData();
            form.append("file", vm.picture);
            console.log(vm.picture);
            var username = TokenStorage.decode(TokenStorage.retrieve()).username;
            $http.post(`${ApiUrls.authlogApi}applications/${ApiUrls.appId}/users/${username}/photo`,
                form, {
                    transformRequest: angular.identity,
                    headers: {'Content-Type': undefined}
                }).then(
                function successCallback(result) {
                    console.log("Picture changed")
                },
                function failureCallback(result) {
                    console.log("Error during changing picture");
                });
        }
        
        function refreshUserData() {
            UserService.getUser(TokenStorage.decode(TokenStorage.retrieve()).username)
                .$promise.then(successCallback, failueCallback);
            function successCallback(result) {
                vm.user = result;
            }
            function failueCallback(result) {
                console.log("Can't get user data.")
            }
        }


    }

})();