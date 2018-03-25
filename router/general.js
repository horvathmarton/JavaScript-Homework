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
    RENDER_MW({ template: 'login.ejs' })
);

ROUTER.post('/login',
    AUTH_MW({ inverse: true }),
    LOGIN_MW({ user_db: USER_STORE }),
    REDIRECT_MW({ route: '/' })
);

ROUTER.get('/logout',
    AUTH_MW({ inverse: false }),
    LOGOUT_MW({ }),
    REDIRECT_MW({ route: '/' })
);

// Register
ROUTER.get('/register',
    AUTH_MW({ inverse: true }),
    RENDER_MW({ template: 'register.ejs' })
);

// Forgotten password
ROUTER.get('/forgotten',
    AUTH_MW({ inverse: true }),
    RENDER_MW({ template: 'forgotten.ejs' })
);

ROUTER.post('/forgotten', // TODO: This feature is not ready yet
    AUTH_MW({ inverse: true }),
    FORGOTTEN_MW({ user_db: USER_STORE })
);

module.exports = ROUTER;