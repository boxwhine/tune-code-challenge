(function () {
    "use strict";

    angular
        .module('tune-app')
        .controller('ProductCtrl', ProductCtrl);

    ProductCtrl.$inject = ['$scope', '$rootScope', '$routeParams', 'productService', 'cartService'];

    function ProductCtrl($scope, $rootScope, $routeParams, productService, cartService) {

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

        $scope.addToCart = function (product) {
            cartService.addToCart(product);
            $rootScope.cartCount = cartService.getCartItemCount();
        };

        $scope.removeFromCart = function (id) {
            cartService.removeOneFromCart(id);
            $rootScope.cartCount = cartService.getCartItemCount();
        };
    }
})();
