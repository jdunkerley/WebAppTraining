var returnsCalc = require('./returnsCalc');
var quandl = require('./quandlAPI.js');

// First Argument is Command
if (process.argv.length < 3) {
    // LEts Run the AAPL Reference
    var fs = require('fs');

    fs.readFile('./AAPL.json', 'utf8', function(err, data) {
        if (err) {
            return console.log(err);
        }

        var jsonObj = JSON.parse(data);
        var minMax = returnsCalc(jsonObj, 'Adj. Close');
        console.log(minMax);
    });
}
else {
    // Arguments DataSet APIKey Start End
    // Could use a command line argument module here but sufficient for this not to
    if (process.argv.length > 2) {
        quandl.apiKey = process.argv[3];
    }
    if (process.argv.length > 3) {
        quandl.startDate = new Date(process.argv[4]);
    }
    if (process.argv.length > 4) {
        quandl.endDate = new Date(process.argv[5]);
    }

    // API is ES2015 Promise Based
    quandl(process.argv[2])
        .then(function(jsonObj) {
            var minMax = returnsCalc(jsonObj, 'Adj. Close');
            console.log(minMax);
        })
        .catch(function(err) {
            console.log(err);
        });
}
