const express = require("express");
const dictionary = require("./dictionary");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('public'));

app.get('/dictionary', (req, res) => {
    const word = req.query.word;
    let isWord = `Your entry: ${word} is a valid entry of the Dictionary!`;
    let notWord = `Your entry: ${word} is not a valid entry of the Dictionary!`;
    if (dictionary.hasOwnProperty(word.toLowerCase()) === true) {
        res.send(isWord);
    } else {
        res.send(notWord);
    }
});


// console.log('server running now');

app.listen(port, () => console.log(`Server listening on ${port}`));
