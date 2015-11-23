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
        $scope.goToNextPage = goToNextPage;
        $scope.goToPrevPage = goToPrevPage;
        $scope.product = currentProduct;

        // pagination
        $scope.currentPage = 0;
        $scope.PAGE_SIZE = 12;
        $scope.numberOfPages = Math.ceil($scope.allProducts.length / $scope.PAGE_SIZE);

        function addToCart(product) {
            cartService.addToCart(product);
            toastr.success('"' + product.name + '" has been added to your cart');
            $rootScope.cartCount = cartService.getCartItemCount();
        }

        // add to cart and push 'em to the cart screen for checkout
        function buyNow(product) {
            cartService.addToCart(product);
            $location.path('/cart')
        }

        function goToNextPage() {
            $scope.currentPage = Math.min($scope.currentPage + 1, $scope.numberOfPages - 1);
        }

        function goToPrevPage() {
            $scope.currentPage = Math.max($scope.currentPage - 1, 0);
        }
    }
})();
