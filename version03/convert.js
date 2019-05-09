const data = require(./words_test.json);
var fs = require('fs');

const words = Object.keys(data).map(value=>{return {word:value}});

const json = JSON.stringify(words);

fs.writeFile('data.json', json, 'utf8', (err)=>{
    if(err){
      console.log(err)
    }else{
      console.log(Conversion complete);
    }
  });


