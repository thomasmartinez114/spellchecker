const express = require("express");
const app = express();

app.get('/', (req, res) => {
    const words = req.query.words;
    res.send(`The word ${words} is in the Dictionary!`);
});


// console.log('server running now');

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server listening on ${port}`));