var returnsCalc = require('./returnsCalc');
var fs = require('fs');

fs.readFile('./AAPL.json', 'utf8', function(err, data) {
    if (err) {
        return console.log(err);
    }

    var jsonObj = JSON.parse(data);
    var minMax = returnsCalc(jsonObj, 'Adj. Close');
    console.log(minMax);
});
