(function () {
    "use strict";

    angular
        .module('tune-app')
        .controller('ProductCtrl', ProductCtrl);

    ProductCtrl.$inject = ['$scope', '$routeParams', 'productService'];

    function ProductCtrl($scope, $routeParams, productService) {

        if($routeParams.id) {
            // Load up specific product for detail page
            productService.getProductById($routeParams.id)
                .then(function(product) {
                    $scope.product = product;
                });
        } else {
            // Load up all products, unless already loaded
            $scope.product = null;

            if(!$scope.allProducts) {
                productService.getProducts()
                    .then(function(products) {
                        $scope.allProducts = products;
                    });
            }
        }
    }
})();
