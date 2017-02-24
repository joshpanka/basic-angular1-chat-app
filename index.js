var express = require('express');
var path = require('path');
var app = express();

const PORT_NUMBER = 3000;

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
})

app.listen(PORT_NUMBER, function(){
    console.log("Listening on port ", PORT_NUMBER);
})