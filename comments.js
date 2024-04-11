// create web server
// create a route for comments
// use the comments model to get all the comments
// send the comments back to the client
// start the web server

const express = require('express');
const app = express();
const comments = require('./models/comments.js');

app.get('/comments', (req, res) => {
    res.json(comments.all);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

