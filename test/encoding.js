var fs = require("fs")
var encoder = require("../index.js")
describe('what?', function () {
  it('should do what?', function (done) {
    var request = encoder.request( "http://www.itmedia.co.jp/", function(error, response, body){
      console.log(body);
      done();
    })
  });
});
