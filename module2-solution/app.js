(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController',AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

function ToBuyShoppingController(ShoppingListCheckOffService){
  var buyCtrl = this;
  buyCtrl.toBuyItems = ShoppingListCheckOffService.getToBuyItems();
  buyCtrl.buyItem = function (index, item) {
    ShoppingListCheckOffService.buyItem(index, item);
  }
}

function AlreadyBoughtShoppingController(ShoppingListCheckOffService){
  var boughtCtrl = this;
  boughtCtrl.boughtItems = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService(){

 var service = this;

 var toBuyItems = [
    { name: "cookies", quantity: 10 },
    { name: "chips", quantity: 3 },
    { name: "sodas", quantity: 5 },
    { name: "fries", quantity: 2 },
    { name: "burgers", quantity: 10 }
  ]

  var boughtItems = [];

  service.getToBuyItems = function(){
    return toBuyItems;
  }

  service.getBoughtItems = function(){
    return boughtItems;
  }

  service.buyItem = function(index, item){
    //remove from toBuy list
    toBuyItems.splice(index,1);
    //add to bought list
    boughtItems.push(item);
  }

}

})();
