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
        }).reverse();
    }

    function getStartDate(date) {
        var result = new Date(date);
        result.setDate(date.getDate() - 7);
        return result;
    }

    function addStartAndReturn(d, i, data) {
        d.start = getStartDate(d.date);

        while (i >= 0 && data[i].date > d.start) {
            i--;
        }

        if (i >= 0) {
            d.startIndex = i;
            d.startValue = data[i].value;
            d.return = d.value / d.startValue - 1;
        }

        return d;
    }

    function getMinAndMax(returnSeries) {
        return returnSeries.reduce(function(p, v) {
            if (p == null) {
                return {min: v, max: v};
            }
            return {
                min: v.return < p.min.return ? v : p.min,
                max: v.return > p.max.return ? v : p.max
            };
        }, null);
    }

    // Public API
    module.exports = function(jsonObj, fieldName) {
        var timeSeries = getTimeSeries(jsonObj, fieldName);

        var returnSeries = timeSeries
            .map(addStartAndReturn)
            .filter(function(d) { return d.return; });

        return getMinAndMax(returnSeries);
    };

    module.exports.getTimeSeries = getTimeSeries;
    module.exports.getStartDate = getStartDate;
    module.exports.addStartAndReturn = addStartAndReturn;
    module.exports.getMinAndMax = getMinAndMax;
}());
