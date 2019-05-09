'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WordSchema = new Schema({
    word: {
        type: String,
        required: [true, 'Word input is required']
    }
});

const Words = mongoose.model('words', WordSchema);
module.exports = Words;