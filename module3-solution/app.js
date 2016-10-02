(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('APIBasePath',"https://davids-restaurant.herokuapp.com/")
.directive('foundItems',FoundItems);

NarrowItDownController.$inject = ['MenuSearchService'];

function NarrowItDownController(MenuSearchService){
  var ctrl = this;
  ctrl.searchTerm = "";
  ctrl.message = "";
  ctrl.found = {};
  ctrl.getMatchedMenuItems = function(){
    if(ctrl.searchTerm){
      var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
      promise.then(function (response) {
        ctrl.found = response;
        ctrl.message = "";
        if(!ctrl.found || ctrl.found.length == 0){
          ctrl.message = "Nothing found!";
        }
      });
    }
    else{
      ctrl.found = {};
      ctrl.message = "Nothing found!";
    }
    ctrl.onRemove = function(index){
      ctrl.found.splice(index, 1);
    }
  }
}

MenuSearchService.$inject=['$http', 'APIBasePath']

function MenuSearchService($http, APIBasePath){

 var service = this;

  service.getMatchedMenuItems = function(searchTerm){
    return $http({
      method: "GET",
      url:APIBasePath + "menu_items.json"
    }).then(function (result) {
      var items = result.data.menu_items;
      // process result and only keep items that match
      var foundItems= [];
      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if(item.description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1){
          foundItems.push(item);
        }
      }
      // return processed items
      return foundItems;
    });
  }
}

function FoundItems() {
  var ddo = {
    templateUrl:'menuItems.html',
    scope:{
      items : '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };
  return ddo;
}

function FoundItemsDirectiveController(){
  var list = this;
}

})();
