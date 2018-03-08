const express = require('express');
const ROUTER = express.Router();

ROUTER.get('/new', (req, res, next) => {
    res.send(`<h1>Register new user</h1>`);
});

ROUTER.get('/:id', (req, res, next) => {
    res.send(`<h1>Show user ${req.params.id}</h1>`);
});

module.exports = ROUTER;