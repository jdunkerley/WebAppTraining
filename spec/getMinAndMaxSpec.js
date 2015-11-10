/* global describe */
describe('getMinAndMax', function() {
    var returnsCalc = require('../returnsCalc');

    it('is a function', function() {
        var typeName = typeof(returnsCalc.getMinAndMax);
        expect(typeName).toEqual('function');
    });

    it('Min and max should be both 2', function() {
        var arr = [{return: 2}];
        var result = returnsCalc.getMinAndMax(arr);
        expect(result.min === 2);
        expect(result.max === 2);
    });

    it('Min and max should be both 2 - multiple same', function() {
        var arr = [{return: 2}, {return: 2}, {return: 2}];
        var result = returnsCalc.getMinAndMax(arr);
        expect(result.min === 2);
        expect(result.max === 2);
    });

    it('Min and max should work with extreme values', function() {
        var arr = [{return: Number.POSITIVE_INFINITY}, {return: 8}, {return: Number.NEGATIVE_INFINITY}];
        var result = returnsCalc.getMinAndMax(arr);
        expect(result.min === Number.NEGATIVE_INFINITY);
        expect(result.max === Number.POSITIVE_INFINITY);
    });

    it('Min and max should work with fractions', function() {
        var arr = [{return: 0.002}, {return: 0.0000002}, {return: 0.2}];
        var result = returnsCalc.getMinAndMax(arr);
        expect(result.min === 0.0000002);
        expect(result.max === 0.2);
    });

});
