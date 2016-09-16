(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {

  $scope.lunchMenu = "";
  $scope.message = "";

  $scope.checkIftooMuch = function () {

    if(!$scope.lunchMenu){
      $scope.message = "Please enter data first";
      $scope.messageClass = "failure"
      return false;
    }

    var items = $scope.lunchMenu.split(",");
    var itemCount = 0;
    for(var i=0; i<items.length; i++){
      if(items[i].trim()){
        itemCount++;
      }
    }
    if(itemCount == 0){
      $scope.message = "Please enter data first";
      $scope.messageClass = "failure"
    }
    else if(itemCount > 3){
      $scope.message = "Too much!";
      $scope.messageClass = "success"
    }
    else{
      $scope.message = "Enjoy!";
      $scope.messageClass = "success"
    }
  };

}

})();
