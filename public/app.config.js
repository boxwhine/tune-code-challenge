(function () {
    "use strict";

    angular
        .module('tune-app')
        .config(config);

    config.$inject = ['$routeProvider', 'toastrConfig'];

    function config($routeProvider, toastrConfig) {
        $routeProvider
            .when('/', {
                templateUrl: 'products/products.html',
                controller: 'ProductCtrl'
            })
            .when('/products', {
                templateUrl: 'products/products.html',
                controller: 'ProductCtrl'
            })
            .when('/products/:id', {
                templateUrl: 'products/product-detail.html',
                controller: 'ProductCtrl'
            })
            .when('/cart', {
                templateUrl: 'cart/cart.html',
                controller: 'CartCtrl'
            })
            .when('/404', {
                templateUrl: '404.html'
            })
            .otherwise({
                redirectTo: '/404'
            });

        angular.extend(toastrConfig, {
            timeOut: 2000
        });
    }
})();

