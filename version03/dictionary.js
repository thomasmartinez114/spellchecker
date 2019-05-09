const fs = require('fs');

// Line 4 is for testing a few words
let dictionary = fs.readFileSync('words_test.json');

// this is the main dictionary source
// let dictionary = fs.readFileSync('words_dictionary.json');

let mainDictionary = JSON.parse(dictionary);

// console.log(dictionary);
// console.log(mainDictionary);
// console.log(Object.keys(mainDictionary));

module.exports = mainDictionary;