const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const { assert } = require('chai');
const Utils = require('./utils');

describe("sendPaymentRequestToApi", function() {
    let stub = sinon.stub(Utils, "calculateNumber");
    let log = sinon.stub(console, "log");

    stub.returns(10)
    sendPaymentRequestToApi(100, 20);

    sinon.spy(Utils, "calculateNumber");
    Utils.calculateNumber('SUM', 100, 20);

    assert.equal(stub.calledWithExactly('SUM', 100, 20), true);
	assert.equal(log.calledWithExactly("The total is: 10"), true);

	stub.restore();
	log.restore();
});
