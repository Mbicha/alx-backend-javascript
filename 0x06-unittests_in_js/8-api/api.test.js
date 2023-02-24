const chai = require('chai');
const request = require('request');

const expect = chai.expect;

describe('Index page', () => {
  const url = 'http://localhost:7865';

  it('correct status code', (done) => {
    request.get(url, (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('correct result', (done) => {
    request.get(url, (error, response) => {
      expect(response.body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('other', (done) => {
    request.get(url, (error, response) => {
      expect(error).to.be.null;
      done();
    });
  });
});
