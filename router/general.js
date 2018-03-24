const ROUTER = require('express').Router();

const USER_STORE = require('../stores/user-store');

const AUTH_MW = require('../middleware/access/auth');
const FORGOTTEN_MW = require('../middleware/access/forgotten');
const LOGIN_MW = require('../middleware/access/login');
const LOGOUT_MW = require('../middleware/access/logout');
const REDIRECT_MW = require('../middleware/general/redirect');
const RENDER_MW = require('../middleware/general/render-page');

// Dashboard
ROUTER.get('/',
    REDIRECT_MW({ route: '/recipies' })
);

// Login - logout
ROUTER.get('/login',
    AUTH_MW({ inverse: true }),
    RENDER_MW({ template: 'login.html' })
);

ROUTER.post('/login',
    AUTH_MW({ inverse: true }),
    LOGIN_MW({ user_db: USER_STORE })
);

ROUTER.get('/logout',
    AUTH_MW({ inverse: false }),
    LOGOUT_MW({ })
);

// Register
ROUTER.get('/register',
    AUTH_MW({ inverse: true }),
    RENDER_MW({ template: 'register.html' })
);

// Forgotten password
ROUTER.get('/forgotten',
    AUTH_MW({ inverse: true }),
    RENDER_MW({ template: 'forgotten.html' })
);

ROUTER.post('/forgotten',
    AUTH_MW({ inverse: true }),
    FORGOTTEN_MW({ user_db: USER_STORE })
);

module.exports = ROUTER;