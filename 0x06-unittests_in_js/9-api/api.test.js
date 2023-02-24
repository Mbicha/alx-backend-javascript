const request = require('supertest');
const { expect } = require('chai');

const app = require('./api');

describe('Index page', () => {
  it('Correct status code?', (done) => {
    request(app)
      .get('/')
      .expect(200, done);
  });

  it('Correct result?', (done) => {
    request(app)
      .get('/')
      .expect('Welcome to the payment system', done);
  });

  it('Other?', (done) => {
    request(app)
      .get('/')
      .expect(/payment/, done);
  });
});

describe('Cart page', () => {
  it('Correct status code when :id is a number?', (done) => {
    request(app)
      .get('/cart/123')
      .expect(200, done);
  });

  it('Correct status code when :id is NOT a number (=> 404)?', (done) => {
    request(app)
      .get('/cart/not-a-number')
      .expect(404, done);
  });

  it('Returns the correct result?', (done) => {
    request(app)
      .get('/cart/456')
      .expect('Payment methods for cart 456', done);
  });
});
