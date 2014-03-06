#! /usr/bin/env node
var fs = require('fs');
var ReallyBadEncryption = require('./index.js');

var args = process.argv.slice(2);

var inputFile = (args.indexOf('-i') > -1) ? args[args.indexOf('-i') + 1] : null;
var outputFile = (args.indexOf('-o') > -1) ? args[args.indexOf('-o') + 1] : null;
var password = (args.indexOf('-p') > -1) ? args[args.indexOf('-p') + 1] : null;

if (inputFile && outputFile && password) {
    ReallyBadEncryption.decryptFile(inputFile,outputFile,password);
} else {
    console.log('Invalid usage:\n -i in\n -o out\n -p pass\n');
}