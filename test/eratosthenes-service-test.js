const chai = require('chai');
const EratosthenesService = require('../services/eratosthenes.service');

chai.should();

/* Test the /GET route */
describe('EratosthenesService', () => {

  it('returns median for given n', () => {
    EratosthenesService.getMedianPrimes(10).should.deep.equal([3, 5]);
    EratosthenesService.getMedianPrimes(18).should.deep.equal([7]);
    EratosthenesService.getMedianPrimes(100).should.deep.equal([41]);
    EratosthenesService.getMedianPrimes(10000).should.deep.equal([4523]);
  });
});
