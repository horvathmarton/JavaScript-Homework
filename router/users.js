const ROUTER = require('express').Router();

const USER_STORE = require('../stores/user-store');

const AUTH_MW = require('../middleware/access/auth');
const REGISTER_MW = require('../middleware/access/register');
const REDIRECT_MW = require('../middleware/general/redirect');
const RENDER_MW = require('../middleware/general/render-page');

// Register user
ROUTER.post('/new',
    AUTH_MW({ inverse: true }),
    REGISTER_MW({ user_db: USER_STORE }),
    REDIRECT_MW({ route: '/login' })
);

// Show user
ROUTER.get('/:user_id',
    AUTH_MW({ inverse: false }),
    RENDER_MW({ template: 'profile.ejs' })
);

module.exports = ROUTER;