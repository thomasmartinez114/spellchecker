const fs = require('fs');
var cleanWords;

const newWords = fs.readFile('words_alpha.txt', 'utf8', function(err, data) {
    if (err) throw err;
    let words = data;
    let cleanWords = words.split('\n');
    console.log(cleanWords);
});

module.exports = newWords;
