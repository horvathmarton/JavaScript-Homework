const ROUTER = require('express').Router();

const RECIPIE_STORE = require('../models/recipie');
const USER_STORE = require('../models/user');

const AUTH_MW = require('../middleware/access/auth');
const GET_ALL_RECIPIE_MW = require('../middleware/recipie/get-all-recipie');
const REGISTER_MW = require('../middleware/access/register');
const REDIRECT_MW = require('../middleware/general/redirect');
const RENDER_MW = require('../middleware/general/render-page');

// Register user
ROUTER.post('/new',
    AUTH_MW({ inverse: true }),
    REGISTER_MW({ user_model: USER_STORE }),
    REDIRECT_MW({ route: '/login' })
);

// Show user
ROUTER.get('/:user_id',
    AUTH_MW({ inverse: false }),
    GET_ALL_RECIPIE_MW({ recipie_db: RECIPIE_STORE }),
    RENDER_MW({ template: 'profile.ejs' })
);

module.exports = ROUTER;