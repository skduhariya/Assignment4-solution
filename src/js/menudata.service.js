(function() {
    'use strict';

    angular.module('data')
        .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$q', '$http'];

    function MenuDataService($q, $http) {
        var service = this;

        service.getAllCategories = function() {
            //  console.log('inside getAllCategories');
            var deffered = $q.defer();

            var response = $http({
                method: 'GET',
                url: 'https://davids-restaurant.herokuapp.com/categories.json'
            }).then(function(result) {
                //    console.log("result: ", result);
                deffered.resolve(result.data);
            }).catch(function(result) {
                //  console.error("error: ", result);
                deffered.reject(result);
            });
            return deffered.promise;

        };
        service.getItemsForCategory = function(categoryShortName) {
            // console.log('inside getItemsForCategory short name: ', categoryShortName);
            var deffered = $q.defer();
            var response = $http({
                method: 'GET',
                url: 'https://davids-restaurant.herokuapp.com/menu_items.json',
                params: {
                    category: categoryShortName
                }
            }).then(function(result) {
                // console.log("datasssss: ", JSON.stringify(result.data));
                deffered.resolve(result.data['menu_items']);
            }).catch(function(error) {
                deffered.reject();
            });

            return deffered.promise;
        };


    }
})();;
