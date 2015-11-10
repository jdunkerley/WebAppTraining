(function() {
    'use strict';
    var https = require('https');
    var concat = require('concat-stream');
    var apiKey = '';
    var startDate = new Date('2010-01-01');
    var endDate = new Date('2014-12-31');

    function getDataSetUrl(dataset) {
        var url = 'https://www.quandl.com/api/v3/datasets/WIKI/' + dataset + '/data.json';

        var params = [];
        if (apiKey !== '') {
            params.push('api_key=' + apiKey);
        }
        if (startDate) {
            params.push('start_date=' + startDate.toISOString().substring(0, 10));
        }
        if (endDate) {
            params.push('end_date=' + endDate.toISOString().substring(0, 10));
        }

        return url + (params.length ? '?' + params.join('&') : '');
    }

    module.exports = function(dataset) {
        return new Promise(function(resolve, reject) {
            https.get(getDataSetUrl(dataset), function(res) {
                res.pipe(function(buffer) {
                    resolve(JSON.parse(buffer.toString()));
                });
            }).on('error', function(e) {
                reject(e);
            });
        });
    };

    module.getDataSetUrl = getDataSetUrl;

    module.apiKey = function(_apiKey) {
        if (!arguments.length) {
            return apiKey;
        }
        apiKey = _apiKey;
    };
    module.startDate = function(_startDate) {
        if (!arguments.length) {
            return startDate;
        }
        startDate = _startDate;
    };
    module.endDate = function(_endDate) {
        if (!arguments.length) {
            return endDate;
        }
        endDate = _endDate;
    };

}());
