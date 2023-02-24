const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const { assert } = require('chai');
const Utils = require('./utils');

describe("sendPaymentRequestToApi", function() {
    let log;

	beforeEach(function () {
		log = sinon.spy(console, "log");
	});

	afterEach(function () {
		log.restore();
	});

	it("sendPaymentRequestToAPI with 100, and 20", () => {
		sendPaymentRequestToApi(100, 20);

		expect(log.calledWithExactly('The total is: 120')).to.be.true;
		expect(log.calledOnce).to.be.true;
	});

	it("sendPaymentRequestToAPI with 10, and 10", () => {
		sendPaymentRequestToApi(10, 10);

		expect(log.calledWithExactly('The total is: 20')).to.be.true;
		expect(log.calledOnce).to.be.true;
	});
});
