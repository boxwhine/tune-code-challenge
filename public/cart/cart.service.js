(function () {
    "use strict";

    angular
        .module('tune-app')
        .factory('cartService', cartService);

    cartService.$inject = ['$rootScope'];

    function cartService($rootScope) {
        // init cart array
        $rootScope.cart = $rootScope.cart || [];
        $rootScope.cartCount = 0;

        return {
            addToCart: addToCart,
            getCartItemCount: getCartItemCount,
            getTotalPriceOfCart: getTotalPriceOfCart,
            removeAllFromCart: removeAllFromCart,
            removeOneFromCart: removeOneFromCart
        };

        function addToCart(product) {
            if(_.any($rootScope.cart, { 'id': product.id })) {
                // bump up quantity if one is already in cart
                var productInCart = _.findWhere($rootScope.cart, { 'id': product.id });
                productInCart.quantity++;
            } else {
                // otherwise just add first instance of product
                product.quantity = 1;
                $rootScope.cart.push(product);
            }
            return $rootScope.cart;
        }

        function getCartItemCount() {
            var count = 0;
            _.each($rootScope.cart, function(product) {
                count += product.quantity;
            });
            return count;
        }

        function removeAllFromCart(productId) {
            $rootScope.cart = _.filter($rootScope.cart, function(product) {
                return product.id !== productId;
            });

            return $rootScope.cart;
        }

        function removeOneFromCart(productId) {
            var idx = _.findLastIndex($rootScope.cart, function(product) {
                return product.id === productId;
            });

            $rootScope.cart.splice(idx, 1);

            return $rootScope.cart;
        }

        function getTotalPriceOfCart() {
            var totalPrice = 0;
            _.each($rootScope.cart, function(product) {
                totalPrice += parseFloat(product.price.replace('$','')) * product.quantity;
            });
            return totalPrice;
        }
    }

})();
