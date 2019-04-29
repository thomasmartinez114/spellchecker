const express = require('express');
// const fruits = require('./data');
const newWords = require('./spellcheck');
const app = express();
const port = 8080; // To grab default port, 5000 is for locally running ---> port = process.env.PORT || 5000;

// console.log(fruits);
console.log(newWords);

app.get('/', function(req, res){
    const userName = req.query.name
    res.send(`Hello ${userName}!`);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));