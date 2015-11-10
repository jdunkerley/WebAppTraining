/* global describe, it, expect, beforeEach */
describe('quandlAPI', function() {
    var quandl;

    beforeEach(function() {
        quandl = require('../quandlAPI');
    });

    it('should not have an API Key by default', function() {
        expect(quandl.apiKey()).toEqual('');
    });
});
