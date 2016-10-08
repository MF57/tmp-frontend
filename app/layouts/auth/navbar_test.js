/**
 * Created by mf57 on 04.09.2016.
 */
'use strict';

describe('myApp.navbar module', function() {

    var $rootScope, $scope, $controller,navbarController;


    beforeEach(module('myApp'));

    beforeEach(inject(function(_$rootScope_, _$controller_){
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $controller = _$controller_;

        navbarController = $controller('NavbarController', {'$rootScope' : $rootScope, '$scope': $scope});
    }));

    it('should exist', function() {
        expect(navbarController).toBeDefined();
    });
});