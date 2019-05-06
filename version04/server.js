const express = require('express');
const app = express();
const dictionary = require('./dictionary.js');
const port = process.env.PORT || 8080;

// static page
app.use(express.static('public'));

app.get('/api', (req, res) => {
    const word = req.query.word;
    let isWord = `Congrats! Your entry: ${word} was found in the dictionary.`;
    let notWord = `Sorry! Your entry: ${word} was not found in the dictionary.`;
    if (dictionary.hasOwnProperty(word.toLowerCase()) === true){
        res.send(isWord);
    } else {
        res.send(notWord);
    }
});

app.listen(port, () => console.log(`Server listening on ${port}`));