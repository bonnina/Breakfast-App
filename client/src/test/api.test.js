const request = require("request");
const chai = require("chai");
const expect = chai.expect;
const url = process.env.REACT_APP_BACKEND_URL;

describe("Test API endpoints", function(){
  it('Adds order to database', function() {
    request.post(url, (err, res) => {
      console.log(res);
       expect(res.statusCode).to.equal(201);
       expect(response).to.have.property('name').with.lengthOf(1);
    });
  });

  it('Fetches existing orders from database', function(done) {
    request.get(url, (req, res) => {
       
      expect(res.statusCode).to.equal(200);
      expect(res.body).to.have.lengthOf.at.least(1);
    });
    done();
  });

  it('Deletes all orders from database', async function(done) {
    await request.delete(url, (req, res) => {
      expect(res.statusCode).to.equal(200);
    });
    
    await request.get(url, (req, res) => {
      expect(res.statusCode).to.equal(200);
      expect(res.body).to.be.an('array').that.is.empty;
    });
    
    done();
  });

});

