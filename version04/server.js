const express = require('express');
const app = express();
const dictionary = require('./dictionary.js');
const port = process.env.PORT || 5000;

// static page
app.use(express.static('public'));

app.get('/dictionary', (req, res) => {
    const
})

app.listen(port, () => console.log(`Server listening on ${port}`));