(function () {
    "use strict";

    angular
        .module('tune-app')
        .controller('CartCtrl', CartCtrl);

    CartCtrl.$inject = ['$scope', '$location', '$http'];

    function CartCtrl($scope, $location, $http) {
        console.log('Cart Controller reporting for duty.');
    }
})();
