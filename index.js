var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

const PORT_NUMBER = 3000;

var test_data = { messages: [ { text: "hello"}, {text: "test"} ] }

app.use('/node_modules/angular', express.static(path.join(__dirname, '/node_modules/angular')));
app.use('/scripts', express.static(path.join(__dirname, '/scripts')));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/messages', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(test_data));
});

app.post('/message', function (req, res) {
    test_data.messages.push(req.body);
});

app.listen(PORT_NUMBER, function(){
    console.log("Listening on port ", PORT_NUMBER);
});