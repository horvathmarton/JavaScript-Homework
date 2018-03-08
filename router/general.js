const express = require('express');
const ROUTER = express.Router();

ROUTER.get('/login', (req, res, next) => {
    res.send(`<h1>Show login screen</h1>`);
});

ROUTER.get('/register', (req, res, next) => {
    res.send(`<h1>Show register screen</h1>`);
});

ROUTER.get('/logout', (req, res, next) => {
    res.send(`<h1>Log user out</h1>`);
});

module.exports = ROUTER;