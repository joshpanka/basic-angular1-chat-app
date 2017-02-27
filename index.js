var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

var mongoose = require('mongoose');
var Msg = require('./models/message');

const PORT_NUMBER = 3000;

mongoose.connect('mongodb://localhost/chatdb');

app.use('/node_modules/angular', express.static(path.join(__dirname, '/node_modules/angular')));
app.use('/scripts', express.static(path.join(__dirname, '/scripts')));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/messages', function (req, res) {
    Msg.find(function (err, msgs) {
        if (err) {
            console.log(err);
        } else {
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(msgs));
        }
    });
});

app.post('/message', function (req, res) {
    var msg = new Msg(req.body);
    msg.save(function (err) {
      if (err) {
        console.log(err);
      }
    });
});

app.listen(PORT_NUMBER, function(){
    console.log("Listening on port ", PORT_NUMBER);
});