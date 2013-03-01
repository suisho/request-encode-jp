var fs = require("fs")
var request = require("../index.js")
var assert = require("assert")
var connect = require("connect")
var app = connect()
app.use(connect.static(__dirname+"/fixtures")).listen(9765)

describe('what?', function () {
  var utf8Result;
  before(function (done) {
    request( "http://localhost:9765/utf8.html", function(error, response, body){
      utf8Result = body;
      done();
    })
  });
  it('Sjis page request', function (done) {
    request( "http://localhost:9765/sjis.html", function(error, response, body){
      assert.equal(body, utf8Result);
      done();
    })
  });
  it('Eucjp page request', function (done) {
    request( "http://localhost:9765/Eucjp.html", function(error, response, body){
      assert.equal(body, utf8Result);
      done();
    })
  });
});
