var express = require('express');
var app = express();

var PORT = 3000;
var IP = "0.0.0.0";

app.use(express.static('static'));

// Bocsánat, ennyit muszáj volt a szebb struktúra miatt
app.get('/', function (req, res) {
    res.redirect('/dashboard.html');
});

var server = app.listen(PORT, IP, function () {
    console.log('Running on port ' + PORT + '...');
});