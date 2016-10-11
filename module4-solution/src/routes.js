(function () {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise('/');

        // *** Set up UI states ***
        $stateProvider

            // Home page
            .state('home', {
                url: '/',
                templateUrl: 'template/home.template.html'
            })
            // Categories
            .state('categories', {
                url: '/categories',
                templateUrl: 'template/main-categorieslist.template.html',
                controller: 'CategoriesController as categoryCtrl',
                resolve: {
                    items: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })
            // Items
            .state('items', {
                url:'/items/{categoryShortName}',
                templateUrl: 'template/item-detail.template.html',
                controller: 'ItemsController as itemCtrl',
                params: {
                    categoryShortName: null
                },
                resolve: {
                    items: ['MenuDataService','$stateParams', function (MenuDataService,$stateParams) {
                        return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
                    }]
                }
            })

    }

})();
