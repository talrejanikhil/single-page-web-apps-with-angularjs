(function () {
    "use strict";

    angular.module('public')
        .controller('SignupController', SignupController);

    SignupController.$inject = ['SignupService'];

    function SignupController(SignupService) {
        var $ctrl = this;
        $ctrl.signupError = false;
        $ctrl.signupSuccess = false;
        $ctrl.submit = function () {
            if($ctrl.menuNumber) {
                var menuItems = SignupService.getMenuItem($ctrl.menuNumber.toUpperCase());
                menuItems.then(function (response) {
                    SignupService.saveUserInfo($ctrl.user, response.data);
                    $ctrl.signupSuccess = true;
                    $ctrl.signupError = false;
                }).catch(function (error) {
                    $ctrl.signupSuccess = false;
                    $ctrl.signupError = true;
                });
            }
        }
    }


})();