(function () {
    "use strict";

    angular
        .module('tune-app')
        .config(routeConfig);

    routeConfig.$inject = ['$routeProvider'];

    function routeConfig($routeProvider) {
        $routeProvider
            .when('/', {
                redirectTo: '/products'
            })
            .when('/products', {
                templateUrl: 'products/products.html',
                controller: 'ProductCtrl',
                resolve: {
                    allProducts: ['productService', function (productService) {
                        return productService.getProducts();
                    }],
                    currentProduct: function () {
                        return null;
                    }
                }
            })
            .when('/products/:id', {
                templateUrl: 'products/product-detail.html',
                controller: 'ProductCtrl',
                resolve: {
                    allProducts: function () {
                        return null;
                    },
                    currentProduct: ['productService, $routeParams', function (productService, $routeParams) {
                        return productService.getProductById($routeParams.id);
                    }]
                }
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
    }
})();

