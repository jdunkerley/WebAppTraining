(function() {
    'use strict';

    var fs = require('fs');

    function getTimeSeries(jsonObj, fieldName) {
        var columnId = jsonObj.dataset.column_names.indexOf(fieldName);
        return jsonObj.dataset.data.map(function(d) {
            return {
                date: new Date(d[0]),
                value: d[columnId]
            };
        });
    }

    fs.readFile('./AAPL.json', 'utf8', function(err, data) {
        if (err) {
            return console.log(err);
        }

        var jsonObj = JSON.parse(data);

        // Structure the data as we need
        var timeSeries = getTimeSeries(jsonObj, 'Adj. Close');

        // Data is in descending order
        timeSeries.reverse();

        // Create Start Date and Create Return
        timeSeries.forEach(function(d, i) {
            d.start = new Date(d.date);
            d.start.setDate(d.date.getDate() - 7);

            while (i >= 0 && timeSeries[i].date > d.start) {
                i--;
            }

            if (i >= 0) {
                d.startIndex = i;
                d.startValue = timeSeries[i].value;
                d.return = d.value / d.startValue - 1;
            }
        });

        var minMax = timeSeries.filter(function(d) { return d.return; }).reduce(function(p, v) {
            if (p == null) {
                return {min: v, max: v};
            }
            return {
                min: v.return < p.min.return ? v : p.min,
                max: v.return > p.max.return ? v : p.max
            };
        }, null);

        console.log(minMax);
    });
}());
