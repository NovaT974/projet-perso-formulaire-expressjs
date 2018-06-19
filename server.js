var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var texte=[];

app.use(express.static("static"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
 res.sendFile(__dirname + 'index.html');
});

app.listen(3002);