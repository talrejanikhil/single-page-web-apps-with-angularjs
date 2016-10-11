(function () {
    'use strict';

    angular.module('MenuApp')
        .component('items', {
            templateUrl: 'template/itemslist.template.html',
            bindings: {
                items: '<'
            }
        });

})();