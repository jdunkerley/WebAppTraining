(function() {
    'use strict';
    var https = require('https');
    var apiKey = '';

    function getDataSetUrl(dataset) {
        var url = 'https://www.quandl.com/api/v3/datasets/WIKI/' + dataset + '/data.json';

        var params = [];
        if (apiKey !== '') {
            params.push('')
        }
        return url;
    }

    module.exports = function() {

    };

    module.apiKey = function(_apiKey) {
        if (!arguments.length) {
            return apiKey;
        }

        apiKey = _apiKey;
    };
}());
