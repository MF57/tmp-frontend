/**
 * Created by mf57 on 02.10.2016.
 */
'use strict';

describe('myApp.userprofile module', function() {

    beforeEach(module('myApp.userprofile'));

    describe('userprofile controller', function(){

        it('should ....', inject(function($controller) {
            //spec body
            var view2Ctrl = $controller('UserProfileCtrl');
            expect(view2Ctrl).toBeDefined();
        }));

    });
});