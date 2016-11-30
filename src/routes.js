(function() {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'src/html/home.html'

            })
            .state('category', {
                url: '/category',
                templateUrl: 'src/html/main-categories.html',
                controller: 'CategoryController as CatCtrl',
                resolve: {
                    categories: ['MenuDataService', function(MenuDataService) {
                        //  console.log("inside resolve");
                        return MenuDataService.getAllCategories();
                    }]
                }
            })
            .state('itemDetail', {
                url: '/items/{itemSNM}',
                templateUrl: 'src/html/main-items.html',
                controller: 'ItemDetailController as itemDetail',
                resolve: {
                    item: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
                        //    console.log("inside resolve items");
                        return MenuDataService.getItemsForCategory($stateParams.itemSNM);
                    }]
                }
            });
    }
})();
