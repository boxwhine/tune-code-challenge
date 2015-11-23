(function () {
    "use strict";

    angular
        .module('tune-app')
        .filter('pagination', function () {
            return function (input, start) {
                start = +start;
                return input.slice(start);
            };
        });
})();
