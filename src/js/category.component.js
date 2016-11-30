(function() {
    'use strict';

    angular.module('data')
        .component('categories', {
            templateUrl: 'src/html/categories.component.html',
            bindings: {
                category: '<'
            }
        });
})();
