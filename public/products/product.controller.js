(function () {
    "use strict";

    angular
        .module('tune-app')
        .controller('ProductCtrl', ProductCtrl);

    ProductCtrl.$inject = ['$scope', '$rootScope', '$routeParams', 'productService', 'cartService', '$location', 'toastr'];

    function ProductCtrl($scope, $rootScope, $routeParams, productService, cartService, $location, toastr) {

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

        // add to cart and push 'em to the cart screen for checkout
        $scope.buyNow = function (product) {
            cartService.addToCart(product);
            $location.path('/cart')
        };

        $scope.addToCart = function (product) {
            cartService.addToCart(product);
            toastr.success('"' + product.name + '" has been added to your cart');
            $rootScope.cartCount = cartService.getCartItemCount();
        };
    }
})();
