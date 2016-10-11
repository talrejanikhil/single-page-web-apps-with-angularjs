(function () {
    'use strict';

    angular.module('data')
        .service('MenuDataService', MenuDataService)
        .constant('APIBasePath', "https://davids-restaurant.herokuapp.com/");

    MenuDataService.$inject=['$http', 'APIBasePath'];

    function MenuDataService($http, APIBasePath){

        var service = this;

        service.getAllCategories  = function(){
            return $http({
                method: "GET",
                url:APIBasePath + "categories.json"
            }).then(function (result) {
                // return categories
                return result.data;
            });
        };

        service.getItemsForCategory = function(categoryShortName){
            return $http({
                method: "GET",
                url:APIBasePath + "menu_items.json?category=" + categoryShortName
            }).then(function (result) {
                return result.data.menu_items;
            });
        }
    }

})();