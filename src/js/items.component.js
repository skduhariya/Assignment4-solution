(function() {
    'use strict';

    angular.module('data')
        .component('items', {
            templateUrl: 'src/html/items.component.html',
            bindings: {
                item: '<'
            }
        });
})();
