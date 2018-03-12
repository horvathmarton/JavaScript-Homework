const express = require('express');
const APP = express();
const bodyParser = require('body-parser');

const general = require('./router/general');
const users = require('./router/users');
const recipies = require('./router/recipies');

const PORT = 3000;
const IP = "0.0.0.0";

APP.use(bodyParser.urlencoded({ extended: true }));
APP.use(bodyParser.json());

APP.use(express.static('static'));
APP.use('/', general);
APP.use('/users', users);
APP.use('/recipies', recipies);

const SERVER = APP.listen(PORT, IP, () => {
    console.log(`Running on port ${PORT}...`);
});