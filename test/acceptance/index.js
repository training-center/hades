var chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../../app')
const should = chai.should()

chai.use(chaiHttp)

describe("Route: Index", () => {
  describe("GET /", () => {
    it("returns a Training Center message", done => {
      chai.request(server)
        .get("/")
        .end((err, res) => {
          const expected = "Plataforma TrainingCenter"
          res.should.have.status(200)
          res.should.be.json
          res.body.msg.should.equal(expected)
          done()
        })
    })
  })
})
