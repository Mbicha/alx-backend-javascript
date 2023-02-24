const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
    it('should return a resolved promise with the object {data: "Successful response from the API"} when success is true', (done) => {
      getPaymentTokenFromAPI(true)
        .then((result) => {
          expect(result).toEqual({ data: 'Successful response from the API' });
          done();
        })
        .catch((error) => {
          done(error);
        });
    });
  
    it('should return a rejected promise with an error message when success is false', (done) => {
      getPaymentTokenFromAPI(false)
        .then(() => {
          done(new Error('Promise should have been rejected'));
        })
        .catch((error) => {
          expect(error.message).toEqual(null);
          done();
        });
    });
});