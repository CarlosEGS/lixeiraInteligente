var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var router = require('./Routes/router'); 
var cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
//mongoose.connect('192.168.99.100:27017/mydb');
mongoose.connect('52.87.165.213:27017/mydb');

var port = process.env.PORT || 8000;

app.use(cors());
app.use('/api', router);

app.listen(port);
console.log('Iniciando a aplicação na porta ' + port);

module.exports = app;