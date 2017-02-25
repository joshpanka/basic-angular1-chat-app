var express = require('express');
var path = require('path');
var app = express();

const PORT_NUMBER = 3000;

app.use('/node_modules/angular', express.static(path.join(__dirname, '/node_modules/angular')));
app.use('/scripts', express.static(path.join(__dirname, '/scripts')));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/messages', function (req, res) {
    console.log("GET MESSAGES");
    res.send("GOT MESSAGES");
});

app.listen(PORT_NUMBER, function(){
    console.log("Listening on port ", PORT_NUMBER);
});