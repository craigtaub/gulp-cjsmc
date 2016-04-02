var through = require("through2");
var cjsmc = require('../cjsmc/lib/buildTemplates');

module.exports = function() {
  return through.obj(function(file, encoding, callback) {
    file.contents = new Buffer(String("module.exports = " + cjsmc()) + "\n");
    this.push(file);
    callback();
  });
};
