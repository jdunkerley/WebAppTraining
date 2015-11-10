/* global describe */
describe('getTimeSeries', function() {
    var returnsCalc = require('../returnsCalc');

    it('is a function', function() {
        var typeName = typeof(returnsCalc.getTimeSeries);
        expect(typeName).toEqual('function');
    });
});
