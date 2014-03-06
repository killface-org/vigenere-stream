var util = require('util');
var s_utils = require('./string-utils.js');
var Transform = require('stream').Transform;


var VigenereCipherStream = function(password,isDecrypt,options) {
    Transform.call(this, options);
    this.key = s_utils.toCharCodeArray(password);
    this.keyIndex = 0;
    if (isDecrypt === true) {
        this._genDecryptKey();
    }
};

util.inherits(VigenereCipherStream, Transform);

VigenereCipherStream.prototype._genDecryptKey = function() {
    for (var i = 0; i < this.key.length; i++) {
        this.key[i] = (26 - this.key[i]) % 26;
    }
};

VigenereCipherStream.prototype._transform = function(chunk, encoding, done) {
    for(var i =0; i < chunk.length; i++) {
        var charCode = chunk[i];

        if (s_utils.isLetter(charCode)) {
            var offset = 0;
            if (s_utils.isUpperCase(charCode)) {
                offset = 65;
            } else if (s_utils.isLowerCase(charCode)) {
                offset = 97;
            }
            chunk[i] = ((charCode - offset + this.key[this.keyIndex % this.key.length]) % 26 + offset);
            this.keyIndex++;
        }
    }
    this.push(chunk);
    done();
};


module.exports = VigenereCipherStream;