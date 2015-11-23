angular
    .module('tune-app')
    .controller('ProductCtrl', function ($scope, $routeParams, Restangular) {
        var msg = 'Product Controller reporting for duty.';
        $scope.productId = $routeParams.id;
        if ($routeParams.id) {
            msg = 'You\'re looking at product number ' + $routeParams.id;
        }
        console.log(msg);
    });
