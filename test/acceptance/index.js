/* eslint-disable no-unused-expressions,no-unused-vars */

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../app');

const should = chai.should();

chai.use(chaiHttp);

describe('Route: Index', () => {
	describe('GET /', () => {
		it('returns a Training Center message', done => {
			chai.request(server)
        .get('/')
        .end((err, res) => {
					const expected = 'Plataforma training-center';
					res.should.have.status(200);
					res.should.be.json;
					res.body.msg.should.equal(expected);
					done();
				});
		});
	});
});
