const calculateNumber = './1-calcul';
let chai = require('chai');
let expect = chai.expect;

describe("calculateNumber", () => {
	expect.to.equal(6, calculateNumber('SUM', 1.4, 4.5));

	expect.to.equal(-4, calculateNumber('SUBTRACT', 1.4, 4.5));

	expect.to.equal(0.2, calculateNumber('DIVIDE', 1.4, 4.5));

	expect.to.equal('Error', calculateNumber('DIVIDE', 1.4, 0));
});
