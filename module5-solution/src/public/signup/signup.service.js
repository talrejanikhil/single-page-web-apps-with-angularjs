(function () {
    "use strict";

    angular.module('common')
        .service('SignupService', SignupService);

    SignupService.$inject = ['$http', 'ApiPath'];

    function SignupService($http, ApiPath) {
        var service = this;
        service.getMenuItem = function (shortName) {
            return $http.get(ApiPath + '/menu_items/' + shortName + '.json').then(function (response) {
                return response;
            });
        };
        service.userInfo = null;
        service.saveUserInfo = function (user, menuItem) {
            service.userInfo = {};
            service.userInfo['user'] = user;
            service.userInfo['menuItem'] = menuItem;
        };
        service.getUserInfo = function () {
            return service.userInfo;
        };
    }

})();