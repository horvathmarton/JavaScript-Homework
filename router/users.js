const express = require('express');

const AUTH_MW = require('../middleware/access/auth');
const REGISTER_MW = require('../middleware/access/register');
const REDIRECT_MW = require('../middleware/general/redirect');
const RENDER_MW = require('../middleware/general/render-page');

const ROUTER = express.Router();

ROUTER.post('/new',
    AUTH_MW(true),
    REGISTER_MW,
    REDIRECT_MW('/')
);

ROUTER.get('/:id',
    AUTH_MW(false),
    RENDER_MW('profile.html')
);

module.exports = ROUTER;