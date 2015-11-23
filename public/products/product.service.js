(function () {
    "use strict";

    angular
        .module('tune-app')
        .factory('productService', productService);

    productService.$inject = ['Restangular', '$log'];

    function productService(Restangular, $log) {
        return {
            getProductById: getProductById,
            getProducts: getProducts
        };

        // Sample product JSON:
        /*
         {
         "name": "Lowe-Luettgen",
         "shortDescription": "Assimilated stable toolset",
         "description": "cumque soluta dolorem non rerum quis",
         "thumbnailUrl": "http://lorempixel.com/180/260/technics",
         "imageUrl": "http://lorempixel.com/350/400/technics",
         "rating": 1,
         "id": 1,
         "price": "$449.72"
         }
         */

        function getProductById(id) {
            return Restangular
                .one('products', id)
                .get()
                .then(getProductByIdComplete)
                .catch(getProductByIdFailed);

            function getProductByIdComplete(response) {
                return response;
            }

            function getProductByIdFailed(error) {
                $log.error('XHR Failed for getProductById using id# ' + id + '.' + error.data);
            }
        }

        function getProducts() {
            return Restangular
                .all('products')
                .getList()
                .then(getProductsComplete)
                .catch(getProductsFailed);

            function getProductsComplete(response) {
                return response;
            }

            function getProductsFailed(error) {
                $log.error('XHR Failed for getProducts.' + error.data);
                return false;
            }
        }
    }

})();
