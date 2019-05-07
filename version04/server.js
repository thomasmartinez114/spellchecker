const express = require('express');
const app = express();
const dictionary = require('./dictionary.js');
const port = process.env.PORT || 8080;

// static page
app.use(express.static('public'));

app.get('/api', (req, res) => {
    const word = req.query.word;
    let isWord = `<div id='correct'>Congrats! Your entry: ${word} was found in the dictionary.</div>`;
    let notWord = `<div id='incorrect'>Sorry! Your entry: ${word} was not found in the dictionary.</div>`;
    if (dictionary.hasOwnProperty(word.toLowerCase()) === true){
        res.send(isWord);
    } else {
        res.send(notWord);
    }
});

app.listen(port, () => console.log(`Server listening on ${port}`));