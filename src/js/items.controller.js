(function() {
    'use strict';

    angular.module('data')
        .controller('ItemDetailController', ItemDetailController);

    ItemDetailController.$inject = ['item'];

    function ItemDetailController(item) {
        var itemDetail = this;
        itemDetail.items = item;

        //  console.log("itemDetail.items: ", item[0].name);

    }
})();
