const mongoose = require('mongoose');
const chai = require('chai');
const expect = chai.expect;
const Order = require("../shema");
require('dotenv').config();

describe('Database Tests', function() {
  
  before(function (done) {
    mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', function() {
      console.log('Connected to test database!');
      done();
    });
  });

  describe('Test Database', function() {
    it('Saves new order to database', function(done) {
      const testOrder = Order({
        name: "Nina",
        time: "09:30",
        address: "My secret address",
        order: ["bacon", "eggs"]
      });
 
      testOrder.save((error, result) => {
        expect(result.name).to.equal('Nina');
        done(); 
      });

    });
    
    it('Doesn\'t save incorrect fields to database', function(done) {
      const wrongOrder = Order({
        notName: "Ni",
        notTime: "09:30",
        notAddress: "My secret address",
        notOrder: ["bacon", "eggs"]
      });
      wrongOrder.save(error => {
        expect(error.name).to.equal('ValidationError');
        done(); 
      });
    });

    it('Doesn\'t save empty fields to database', function(done) {
      const emptyOrder = Order({
        name: "",
        time: "09:30",
        address: "My secret address",
        order: ["bacon", "eggs"]
      });
      emptyOrder.save(error => {
        expect(error.name).to.equal('ValidationError');
        done(); 
      });
    });

  });

});