const calculateNumber = './1-calcul';
const assert = require('assert');

describe("calculateNumber", () => {
	assert.equal(6, calculateNumber('SUM', 1.4, 4.5));

	assert.equal(-4, calculateNumber('SUBTRACT', 1.4, 4.5));

	assert.equal(0.2, calculateNumber('DIVIDE', 1.4, 4.5));

	assert.equal('Error', calculateNumber('DIVIDE', 1.4, 0));
});
