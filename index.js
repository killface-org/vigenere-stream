var fs = require('fs');
var VigenereCipherStream = require('./lib/vigenere-stream.js');

function cryptFile(inFile,outFile,password,isDecrypting) {
    var inFileStream = fs.createReadStream(inFile);
    var outFileStream = fs.createWriteStream(outFile);
    var CipherStream = new VigenereCipherStream(password,isDecrypting);
    inFileStream.pipe(CipherStream).pipe(outFileStream);
}

module.exports.encryptFile = function(i,o,p) {
    cryptFile(i,o,p,false);
};

module.exports.decryptFile = function(i,o,p) {
    cryptFile(i,o,p,true);
};

