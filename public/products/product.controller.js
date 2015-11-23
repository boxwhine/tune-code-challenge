(function () {
    "use strict";

    angular
        .module('tune-app')
        .controller('ProductCtrl', ProductCtrl);

    ProductCtrl.$inject = ['$scope', '$rootScope', 'allProducts', 'currentProduct', 'cartService', '$location', 'toastr'];

    function ProductCtrl($scope, $rootScope, allProducts, currentProduct, cartService, $location, toastr) {

        $scope.addToCart = addToCart;
        $scope.allProducts = allProducts;
        $scope.buyNow = buyNow;
        $scope.product = currentProduct;

        // pagination
        $scope.currentPage = 0;
        $scope.PAGE_SIZE = 12;
        $scope.numberOfPages = function() {
            return Math.ceil($scope.allProducts.length / $scope.PAGE_SIZE);
        };

        // add to cart and push 'em to the cart screen for checkout
        function buyNow(product) {
            cartService.addToCart(product);
            $location.path('/cart')
        }

        function addToCart(product) {
            cartService.addToCart(product);
            toastr.success('"' + product.name + '" has been added to your cart');
            $rootScope.cartCount = cartService.getCartItemCount();
        }
    }
})();
