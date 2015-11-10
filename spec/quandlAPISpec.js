/* global describe, it, expect, beforeEach */
describe('quandlAPI', function() {
    var quandl;

    beforeEach(function() {
        quandl = require('../quandlAPI');
    });

    it('should not have an API Key by default', function() {
        expect(quandl.apiKey()).toEqual('');
    });
    it('should allow API Key to be set', function() {
        quandl.apiKey('HelloWorld');
        expect(quandl.apiKey()).toEqual('HelloWorld');
    });

    it('should have start date set to 1 Jan 2010 by default', function() {
        expect(quandl.startDate().toISOString().substring(0, 10)).toEqual('2010-01-01');
    });
    it('should allow start date set to be set', function() {
        quandl.startDate(new Date('2015-01-01'));
        expect(quandl.startDate().toISOString().substring(0, 10)).toEqual('2015-01-01');
    });

    it('should have end date set to 31 default-case 2014 by default', function() {
        expect(quandl.endDate().toISOString().substring(0, 10)).toEqual('2014-12-31');
    });
    it('should allow end date set to be set', function() {
        quandl.endDate(new Date('2015-01-01'));
        expect(quandl.endDate().toISOString().substring(0, 10)).toEqual('2015-01-01');
    });
});
