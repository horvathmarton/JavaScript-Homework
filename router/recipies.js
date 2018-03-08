const express = require('express');
const ROUTER = express.Router();

ROUTER.get('/', (req, res, next) => {
    res.send(`<h1>List all recipies</h1>`);
});

ROUTER.get('/new', (req, res, next) => {
    res.send(`<h1>Create new recipie</h1>`);
});

ROUTER.get('/:id', (req, res, next) => {
    res.send(`<h1>Show recipie ${req.params.id}</h1>`);
});

ROUTER.get('/edit/:id', (req, res, next) => {
    res.send(`<h1>Edit recipie ${req.params.id}</h1>`);
});

ROUTER.get('/delete/:id', (req, res, next) => {
    res.send(`<h1>Delete recipie ${req.params.id}</h1>`);
});

module.exports = ROUTER;