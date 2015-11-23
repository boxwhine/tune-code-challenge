(function () {
    "use strict";

    angular
        .module('tune-app')
        .controller('NavCtrl', NavCtrl);

    NavCtrl.$inject = ['$scope', '$location'];

    function NavCtrl($scope, $location) {
        $scope.isActive = isActive;

        function isActive(currentPath) {
            return $location.path().indexOf(currentPath) === 0;
        }
    }
})();
