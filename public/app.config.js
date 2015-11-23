(function () {
    "use strict";

    angular
        .module('tune-app')
        .config(config);

    config.$inject = ['toastrConfig'];

    function config(toastrConfig) {
        angular.extend(toastrConfig, {
            timeOut: 2000
        });
    }
})();

