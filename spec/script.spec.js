const calculate = require('../script.js');

describe("Interest Rate Calculator", function() {
    it("should calculate interest correctly for valid inputs", function() {
        expect(calculate(1000, 5, 2)).toEqual(100);
    });

    it("should calculate interest correctly for string inputs", function() {
        expect(calculate("1000", "5", "2")).toEqual(100);
    });
});
