const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../app');

chai.should();
chai.use(chaiHttp);

/* Test the /GET route */
describe('app index route', () => {

  it('it should GET / and return 402 status', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(402);
        done();
      });
  });

  it('it should GET / and return 200 status', (done) => {
    const expected = {
      data: [3, 5]
    };
    chai.request(app)
      .get('/?upperLimit=10')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.deep.equal(expected);
        done();
      });
  });

  it('it should handle 404 error', (done) => {
    chai.request(app)
      .get('/notExist')
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
});
