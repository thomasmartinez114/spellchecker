const express = require('express');
const app = express();
const dictionary = require('./dictionary.js');
const port = process.env.PORT || 8080;

// static page
app.use(express.static('public'));

app.get('/dictionary', (req, res) => {
    const word = req.query.word;
        res.send(`The word ${word} is in the dictionary! Congrats!`);
})

app.listen(port, () => console.log(`Server listening on ${port}`));