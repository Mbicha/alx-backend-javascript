const { expect } = require('chai');
const request = require('supertest');
const app = require('./api');

describe('GET /', () => {
  it('should return a welcome message', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });
});

describe('GET /cart/:id', () => {
  it('should return payment methods for cart :id', (done) => {
    request(app)
      .get('/cart/12')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.equal('Payment methods for cart 12');
        done();
      });
  });

  it('should return a 404 status code when id is not a number', (done) => {
    request(app)
      .get('/cart/abc')
      .expect(404)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.equal('Invalid ID');
        done();
      });
  });
});

describe('GET /available_payments', () => {
  it('should return an object with credit_cards and paypal properties', (done) => {
    request(app)
      .get('/available_payments')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        });
        done();
      });
  });
});

describe('POST /login', () => {
  it('should return a welcome message with the username provided in the request body', (done) => {
    const username = 'JohnDoe';
    request(app)
      .post('/login')
      .send({ userName: username })
      .set('Content-Type', 'application/json')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.equal(`Welcome ${username}`);
        done();
      });
  });
});
