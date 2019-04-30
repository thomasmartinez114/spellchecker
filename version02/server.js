const express = require('express');
const users = require('./data.js');
const getemail = require('./getemail.js');
const app = express();

// get user by index
app.get("/getuser", (req, res) => {
    const index = req.query.index;
    const oneUser = users[index];
    res.send(oneUser);
})

// get email of user by inserting their name
app.get("/getemail", (req, res) => {
    const name = req.query.name;
    const email = getemail(users, name);
    res.send(email);
})

// app.get(["route"], (request *input, response *output)
app.get("/greet", (req, res) => {
    const userName = req.query.user; //receive query from browser
    res.send(`Hello ${userName}!`);
});

app.get("/goodbye", (req, res) => {
    const userName = req.query.user;
    res.send(`Goodbye ${userName}!`);
});

app.get("/weather", (req, res) => {
    const weather = req.query.weather;
    res.send(`What is the weather today? The weather is ${weather} degrees!`);
});

const port = process.env.PORT || 8080; //default port selection
app.listen(port, () => console.log(`Server listening on port ${port}`));
