const fs = require("fs");

// let ogDictionary = fs.readFileSync("words_test.json");
let ogDictionary = fs.readFileSync("words_dictionary.json");

let dictionary = JSON.parse(ogDictionary);

module.exports = dictionary;