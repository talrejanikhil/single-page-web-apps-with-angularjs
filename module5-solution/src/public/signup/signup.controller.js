(function () {
    "use strict";

    angular.module('public')
        .controller('SignupController', SignupController);

    SignupController.$inject = ['SignupService'];

    function SignupController(SignupService) {
        var $ctrl = this;
        $ctrl.signupError = false;
        $ctrl.signupSuccess = false;
        var favItem = null;
        $ctrl.submit = function () {
            if($ctrl.menuNumber) {
                var res = SignupService.getMenuItem($ctrl.menuNumber.toUpperCase());
                res.then(function (response) {
                    favItem =  response.data;
                    SignupService.saveUserInfo($ctrl.user, favItem);
                    $ctrl.signupSuccess = true;
                    $ctrl.signupError = false;
                }).catch(function (error) {
                    $ctrl.signupSuccess = false;
                    $ctrl.signupError = true;
                });
            }
            else {
                SignupService.saveUserInfo($ctrl.user, favItem);
                $ctrl.signupError = false;
                $ctrl.signupSuccess = true;
            }
        }
    }


})();