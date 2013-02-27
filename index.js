var request = require("request")
var Encoding = module.exports.Encoding = require("./unzipper/src/encoding.js").Encoding;

module.exports.request = function(options, callback) {
  options = request.initParams(options);
  options.encoding = null;
  request(options, function(error, response, body){
    var from = Encoding.detect(body);
    
    var encodedArray = Encoding.convert(body, 'UTF-8');
    var StringDecoder = require('string_decoder').StringDecoder;
    var decoder = new StringDecoder('utf-8');
    var cert = new Buffer(encodedArray)
    body =  decoder.write(cert);
    callback(error, response, body);
  });
}
