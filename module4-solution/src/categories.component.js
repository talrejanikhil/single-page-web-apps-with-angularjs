(function () {
    'use strict';

    angular.module('MenuApp')
        .component('categories', {
            templateUrl: 'template/categorieslist.template.html',
            bindings: {
                items: '<'
            }
        });

})();