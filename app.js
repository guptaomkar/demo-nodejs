const express = require('express');
const app = express();

app.listen(3300, () => { console.log("Server started on port 3300") });

app.get('/', (req, res) => {
    res.send("Hello world");
})

app.get('/welcome', (req, res) => {
    res.send("welcome to jenkins");
})