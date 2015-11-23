(function () {
    "use strict";

    angular
        .module('tune-app')
        .controller('CartCtrl', CartCtrl);

    CartCtrl.$inject = ['$scope', '$rootScope', 'cartService', 'toastr'];

    function CartCtrl($scope, $rootScope, cartService, toastr) {
        $scope.totalCartPrice = cartService.getTotalPriceOfCart();

        $scope.removeFromCart = function (product) {
            cartService.removeAllFromCart(product.id);
        };

        $rootScope.$watch('cart', function (newVal, oldVal) {
            $scope.totalCartPrice = cartService.getTotalPriceOfCart();
            $rootScope.cartCount = cartService.getCartItemCount();
        }, true);
    }
})();
