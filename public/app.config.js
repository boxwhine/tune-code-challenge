angular
    .module('tune-app')
    .config(['$routeProvider', function ($routeProvider) {
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
    }]);
