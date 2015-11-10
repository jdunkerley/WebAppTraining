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
        { name: 'dataset', type: String, defaultOption: true, description: 'Dataset Code within the WIKI database' },
        { name: 'apikey', alias: 'k', type: String, description: 'Quandl API Key (optional but limited anonymous requests)' },
        { name: 'startDate', alias: 's', type: String, description: 'Start Date in yyyy-MM-dd (defaults to 2010-01-01)' },
        { name: 'endDate', alias: 'e', type: String, description: 'End Date in yyyy-MM-dd (defaults to 2014-12-31)' },
        { name: 'period', alias: 'p', type: Number, description: 'Number of Periods (defaults to 1)' },
        { name: 'periodType', alias: 't', type: String, description: 'Period Type [days, weeks, months, years] (defaults to weeks)' },
        { name: 'help', alias: 'h', type: Boolean }
    ]);

    var options = cli.parse();
    if (options.help) {
        console.log(cli.getUsage());
        return;
    }

    console.log('Running Returns Calc for: ');
    console.log(options);

    if (options.apikey) {
        quandl.apiKey(options.apikey);
    }
    if (options.startDate) {
        quandl.startDate(new Date(options.startDate));
    }
    if (options.endDate) {
        quandl.endDate(new Date(options.endDate));
    }
    if (options.period) {
        returnsCalc.period(options.period);
    }
    if (options.periodType) {
        returnsCalc.periodType(options.periodType);
    }

    // API is ES2015 Promise Based
    quandl(options.dataset)
        .then(function(jsonObj) {
            var minMax = returnsCalc(jsonObj, 'Adj. Close');
            console.log(minMax);
        })
        .catch(function(err) {
            console.log(err);
        });
}
