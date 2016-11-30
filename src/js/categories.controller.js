(function() {
    'use strict';
    angular.module('data')
        .controller('CategoryController', CategoryController);

    CategoryController.$inject = ['MenuDataService', 'categories'];

    function CategoryController(MenuDataService, categories) {
        var CatCtrl = this;
        //  console.log("inside categoryController: ", categories);
        CatCtrl.categories = categories;
    }
})();
