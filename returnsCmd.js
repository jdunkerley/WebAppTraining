var returnsCalc = require('./returnsCalc');
var quandl = require('./quandlAPI.js');
var commandLineArgs = require('command-line-args');

// First two arguments are command
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
    var cli = commandLineArgs([
        { name: 'dataset', type: String, defaultOption: true },
        { name: 'apikey', alias: 'k', type: String },
        { name: 'startDate', alias: 's', type: String },
        { name: 'endDate', alias: 'e', type: String },
        { name: 'period', alias: 'p', type: Number },
        { name: 'periodType', alias: 'pt', type: String }
    ]);

    if (cli.apikey) {
        quandl.apiKey = cli.apikey;
    }
    if (cli.startDate) {
        quandl.startDate = new Date(cli.startDate);
    }
    if (cli.endDate) {
        quandl.endDate = new Date(cli.endDate);
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
