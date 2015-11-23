(function () {
    "use strict";

    angular
        .module('tune-app')
        .controller('CartCtrl', CartCtrl);

    CartCtrl.$inject = ['$scope', '$rootScope', 'cartService'];

    function CartCtrl($scope, $rootScope, cartService) {
        $scope.totalCartPrice = cartService.getTotalPriceOfCart();

        $scope.removeFromCart = function (id) {
            cartService.removeAllFromCart(id);
        };

        $rootScope.$watch('cart', function (newVal, oldVal) {
            $scope.totalCartPrice = cartService.getTotalPriceOfCart();
            $rootScope.cartCount = cartService.getCartItemCount();
        }, true);

        $scope.updateQuantity = function (product) {
            var foo = '';
        }
    }
})();
