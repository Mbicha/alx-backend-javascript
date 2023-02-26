const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const { assert } = require('chai');
const Utils = require('./utils');

describe("sendPaymentRequestToApi", function() {
    sinon.spy(Utils, "calculateNumber");
    Utils.calculateNumber('SUM', 100, 20);

    let spyCall = Utils.calculateNumber.getCall(0);
    assert.equal(spyCall.returnValue, sendPaymentRequestToApi(100,20));
});