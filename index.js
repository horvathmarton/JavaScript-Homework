const express = require('express');
const bodyParser = require('body-parser');

const generalRouter = require('./router/general');
const usersRouter = require('./router/users');
const recipiesRouter = require('./router/recipies');

const APP = express();
const IP = "0.0.0.0";
const PORT = process.env.PORT || 3000;

APP.use(bodyParser.urlencoded({ extended: true }));
APP.use(bodyParser.json());

APP.use(express.static('static'));

APP.use('/', generalRouter);
APP.use('/users', usersRouter);
APP.use('/recipies', recipiesRouter);

APP.listen(PORT, IP, () => {
    console.log(`Running on port ${PORT}...`);
});