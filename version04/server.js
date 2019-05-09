const express = require('express');
const app = express();
// const dictionary = require('./dictionary.js');
const Words = require('./api/wordModel.js');
const port = process.env.PORT || 8080;

<<<<<<< HEAD
// Connecting mongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:2701/spellchecker');

mongoose.connection.once('open', function(){
    console.log('Connection has been made, now make fireworks...');
}).on('error', function(error){
    console.log('Connectino error:', error);
});

=======
// mongoose
const mongoose = require('mongoose');
// connect to mongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/spellchecker', { useNewUrlParser: true }, function(error) {
    //check if mongoose connected to mongoDB
    if (error) {
        console.log(error);
    }
    else {
        console.log("connection successful")
    }
});

app.use(bodyParser.json());
>>>>>>> beforeMongoose

// static page
app.use(express.static('public'));

app.get('/api', (req, res) => {
    const word = req.query.word;
    
    // mongoose
    word = word.toLowerCase();
    let isWord = `<div id='correct'>Congrats! Your entry: ${word} was found in the dictionary.</div>`;
    let notWord = `<div id='incorrect'>Sorry! Your entry: ${word} was not found in the dictionary.</div>`;
    Words.find({ word }).then(function(results, error){
        if (!results.length) { res.send(notWord) }
        else {
            res.send(isWord)
            console.log(results);
        }
    });
    
    
    
    //dictionary.json 
    
    // let isWord = `<div id='correct'>Congrats! Your entry: ${word} was found in the dictionary.</div>`;
    // let notWord = `<div id='incorrect'>Sorry! Your entry: ${word} was not found in the dictionary.</div>`;
    // if (dictionary.hasOwnProperty(word.toLowerCase()) === true){
    //     res.send(isWord);
    // } else {
    //     res.send(notWord);
    // }
});

app.listen(port, () => console.log(`Server listening on ${port}`));