(function() {
    'use strict';

    /* Services */

    var quandlServices = angular.module('quandlServices', ['ngResource']);

    quandlServices.factory('DatasetsList', ['$resource',
        function ($resource) {
            return $resource('https://www.quandl.com/api/v3/datasets.json?api_key=nzzdYfMQMTZTgeJwsW2k&database_code=WIKI&per_page=:perPage&page=:page', {}, {
                get: {method: 'GET', cache: true}
            });
        }]);

})();