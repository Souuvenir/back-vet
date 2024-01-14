var express = require('express');
var cors = require('cors');

var router = require('./router/router');

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.use('/SV', router); 


module.exports = app;