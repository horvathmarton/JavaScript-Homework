const express = require('express');
const ROUTER = express.Router();

const RENDER_MW = require('../middleware/render-page');

ROUTER.post('/new',
    AUTH_MW(true),
    REGISTER_MW,
    REDIRECT_MW('/')
);

ROUTER.get('/:id',
    AUTH_MW(false),
    RENDER_MW('/profile.html')
);

module.exports = ROUTER;