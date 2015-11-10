# WebAppTraining

* Run `npm install` to download the dependencies needed.

Web App training creating a simple Quandl Web App

## Returns Analysis
You will need to get an API key from Quandl for this.

Command line arguments are:
 - dataset
 - APIKey (defaults to anonymous request)
 - StartDate (defaults to 1 Jan 2010)
 - EndDate (defaults to 31 Dec 2014)
 - Period (defualts to 7)
 - PeriodType (defaults to days)
* To run the unit tests use `jasmine` or for continuous testing run `jasmine-node --autotest .`

## Web Mock Up
* To run the mock up site run `npm start`

## Gulp 
* Set up as a demo build tool
* `gulp lint` will run eslint on the project
* `gulp test` will run jasmine tests
* `gulp watchAll` will watch for changes in javascript files and then lint and test
* `gulp uglify` will create a minified version of the modules and create a `dist` folder
* `gulp` runs `lint` and `test` then `uglify`

