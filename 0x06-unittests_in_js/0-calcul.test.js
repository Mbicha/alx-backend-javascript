const calculateNumber = './0-calcul';
const assert = require('assert');

describe ("calculateNumber", () => {
    it('floating point whole numbers', () => {
        assert.strictEqual(calculateNumber(1.0, 2.0), 3);
    });
    
    it('rounding down b\'s floating point fractional number', () => {
        assert.strictEqual(calculateNumber(1.0, 2.4), 3);
    });
    
    it('rounding down a and b\'s floating point fractional number', () => {
        assert.strictEqual(calculateNumber(1.4, 2.4), 3);
    });
    
    it('rounding down a\'s floating point fractional number', () => {
        assert.strictEqual(calculateNumber(1.4, 2.0), 3);
    });
});
// > calculateNumber(1, 3)
// 4
// > calculateNumber(1, 3.7)
// 5
// > calculateNumber(1.2, 3.7)
// 5
// > calculateNumber(1.5, 3.7)
// 6