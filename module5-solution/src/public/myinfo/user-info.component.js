(function () {
    "use strict";

    angular.module('public')
        .component('userInfo', {
            templateUrl: 'src/public/myinfo/user-info.html',
            bindings: {
                userInfo: '<'
            },
            controller: UserInfoController
        });

    function UserInfoController() {
        var $ctrl = this;
    }

})();
