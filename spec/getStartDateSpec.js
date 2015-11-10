/* global describe */
describe('getStartDate', function() {
    var returnsCalc = require('../returnsCalc');

    it('is a function', function() {
        var typeName = typeof(returnsCalc.getStartDate);
        expect(typeName).toEqual('function');
    });

    it('should return a day 7 days earlier', function() {
        var date = new Date('2015-10-20');
        var result = returnsCalc.getStartDate(date);
        expect(result.toISOString().substr(0, 10)).toEqual('2015-10-13');
    })

    it('should return a day 7 days earlier in previous year', function() {
        var date = new Date('2015-01-01');
        var result = returnsCalc.getStartDate(date);
        expect(result.toISOString().substr(0, 10)).toEqual('2014-12-25');
    })
});
