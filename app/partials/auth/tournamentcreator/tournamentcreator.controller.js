(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('TournamentCreatorCtrl', TournamentCreatorController);

    TournamentCreatorController.$inject = ['$http', 'ApiUrls'];
    function TournamentCreatorController($http, ApiUrls) {
        var vm = this;

        vm.scrollTo = scrollTo;

        function scrollTo(elementNumber) {
            $("#tmp-creator").scrollTo(($("#tmp-creator-content").find("> li:nth-child("+ elementNumber +")")), 1000)
        }


        $(document).ready(function () {
            $('ul.tmp-navbar > div > li').click(function (e) {
                e.preventDefault();
                $('ul.tmp-navbar > div > li').removeClass('active');
                $(this).addClass('active');
            });
        });


    }

})();
