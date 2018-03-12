const express = require('express');
const ROUTER = express.Router();

const AUTH_MW = require('../middleware/access/auth');
const LOGIN_MW = require('../middleware/access/login');
const LOGOUT_MW = require('../middleware/access/logout');
const REDIRECT_MW = require('../middleware/general/redirect');
const RENDER_MW = require('../middleware/general/render-page');

ROUTER.get('/',
    REDIRECT_MW('/recipies')
);

ROUTER.get('/login',
    AUTH_MW(true),
    RENDER_MW('/login.html')
);

ROUTER.post('/login',
    AUTH_MW(true),
    LOGIN_MW
);

ROUTER.get('/register',
    AUTH_MW(true),
    RENDER_MW('/register.html')
);

ROUTER.delete('/logout',
    AUTH_MW(false),
    LOGOUT_MW
);

ROUTER.get('/forgotten',
    AUTH_MW(true),
    RENDER_MW('/forgotten.html')
);

module.exports = ROUTER;