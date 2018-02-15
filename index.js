var express = require('express');
var app = express();

var PORT = 3000;

app.use(express.static('static'));

var server = app.listen(PORT, function () {
    console.log('Running on port ' + PORT + '...');
});