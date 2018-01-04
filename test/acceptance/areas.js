/* eslint-disable no-unused-expressions,no-unused-vars */

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../app');

const should = chai.should();

chai.use(chaiHttp);

describe('Route: Areas', () => {
  it('GET areas/ - retorna lista de areas vazia', (done) => {
    chai.request(server)
      .get('/areas/')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.have.keys('areas');
        res.body.areas.should.be.an('array').that.is.empty;

        done();
      });
  });

  it('POST areas/ - deve cadastrar uma area', (done) => {
    chai.request(server)
      .post('/areas/')
      .send({ name: 'Back-End' })
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.include({ id: 1, name: 'Back-End' });

        done();
      });
  });

  it('PUT areas/ - deve atualizar uma area', (done) => {
    chai.request(server)
      .put('/areas/1')
      .send({ name: 'Front-End' })
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.have.keys('areas');
        res.body.areas.should.be.an('array').that.deep.include({ id: 1, name: 'Front-End' });

        done();
      });
  });
});
