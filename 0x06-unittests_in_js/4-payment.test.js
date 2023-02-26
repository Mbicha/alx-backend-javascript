const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
    it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
        const bigBrother = sinon.spy(console);
        const calc = sinon.stub(Utils, 'calculateNumber');
    
        calc.returns(10);
        sendPaymentRequestToApi(100, 20);
        expect(calc.calledWith('SUM', 100, 20)).to.be.true;
        expect(calc.callCount).to.be.equal(1);
        expect(bigBrother.log.calledWith('The total is: 10')).to.be.true;
        expect(bigBrother.log.callCount).to.be.equal(1);
        calc.restore();
        bigBrother.log.restore();
    });
});
