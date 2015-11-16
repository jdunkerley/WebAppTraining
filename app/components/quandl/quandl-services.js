(function() {
    'use strict';

    /* Services */

    var quandlServices = angular.module('quandlServices', ['ngResource']);

    quandlServices.factory('DatasetsList', ['$resource',
        function ($resource) {
            return $resource('https://www.quandl.com/api/v3/datasets.json?api_key=yourkey&query=:query&database_code=WIKI&per_page=:perPage&page=:page', {}, {
                get: {method: 'GET', cache: true}
            });
        }]).factory('DataDetails', ['$resource',
        function ($resource) {
            return $resource('https://www.quandl.com/api/v3/datasets/WIKI/:code/data.json?api_key=yourkey&start_date=2014-01-01', {}, {
                get: {method: 'GET', cache: true}
            });
        }]);

})();