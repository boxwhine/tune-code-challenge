var app = angular.module('tune-app', [
    'ngRoute'
]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/products.html',
            controller: 'ProductCtrl'
        })
        .when('/products', {
            templateUrl: 'partials/products.html',
            controller: 'ProductCtrl'
        })
        .when('/products/:id', {
            templateUrl: 'partials/product-detail.html',
            controller: 'ProductCtrl'
        })
        .when('/cart', {
            templateUrl: 'partials/cart.html',
            controller: 'CartCtrl'
        })
        .when('/404', {
            templateUrl: '404.html'
        })
        .otherwise({
            redirectTo: '/404'
        });
}]);


app.controller('ProductCtrl', function ( $scope, $location, $http, $routeParams ) {
    var msg = 'Product Controller reporting for duty.';
    $scope.productId = $routeParams.id;
    if($routeParams.id) {
        msg = 'You\'re looking at product number ' + $routeParams.id;
    }
    console.log(msg);
});

app.controller('CartCtrl', function ( $scope, $location, $http ) {
    console.log('Cart Controller reporting for duty.');
});
