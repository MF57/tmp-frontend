/**
 * Created by mf57 on 03.09.2016.
 */
(function () {
    'use strict';
    angular
        .module('AuthModule')
        .service('ApiUrls', ApiUrls);

    ApiUrls.$inject = [];
    function ApiUrls() {
        var enrollment = "http://tmp-enrollment.tegess.com:8093/";
        var core = "http://tmp-core.tegess.com:8092/";
        var stats = "http://tmp-stats.tegess.com:8094/";
        var authlog = "http://tmp-authlog.tegess.com:8090/";
        var api = "api/";
        this.enrollmentApi = enrollment + api;
        this.coreApi = core + api;
        this.statsApi = stats + api;
        this.authlogApi = authlog + api;
        this.appId="5730dd4bc9e77c000189ad7a";
        return this;
    }

})();