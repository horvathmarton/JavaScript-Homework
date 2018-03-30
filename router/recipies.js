const ROUTER = require('express').Router();

const RECIPIE_STORE = require('../stores/recipie-store');
const USER_STORE = require('../stores/user-store');

const AUTH_MW = require('../middleware/access/auth');
const AUTHORIZE_MW = require('../middleware/access/authorize');
const DELETE_RECIPIE_MW = require('../middleware/recipie/delete-recipie');
const GET_ALL_RECIPIE_MW = require('../middleware/recipie/get-all-recipie');
const GET_RECIPIE_MW = require('../middleware/recipie/get-recipie');
const RATE_MW = require('../middleware/recipie/rate-recipie');
const REDIRECT_MW = require('../middleware/general/redirect');
const RENDER_MW = require('../middleware/general/render-page');
const UPDATE_RECIPIE_MW = require('../middleware/recipie/update-recipie');

// List all
ROUTER.get('/',
    GET_ALL_RECIPIE_MW({ recipie_db: RECIPIE_STORE }),
    RENDER_MW({ template: 'dashboard.ejs' })
);

// Create new
ROUTER.get('/new', // TODO: This feature should be tested
    AUTH_MW({ inverse: false }),
    RENDER_MW({ template: 'create-recipie.ejs' })
);

ROUTER.post('/new',
    AUTH_MW({ inverse: false }),
    UPDATE_RECIPIE_MW({ recipie_db: RECIPIE_STORE }),
    REDIRECT_MW({ route: '/recipes' })
);

// View one
ROUTER.get('/:recipie_id',
    AUTH_MW({ inverse: false }),
    GET_RECIPIE_MW({ recipie_db: RECIPIE_STORE, user_db: USER_STORE }),
    RENDER_MW({ template: 'recipie.ejs' })
);

// Edit
ROUTER.get('/:recipie_id/edit', // TODO: Not implemented yet
    AUTH_MW({ inverse: false }),
    GET_RECIPIE_MW({ recipie_db: RECIPIE_STORE, user_db: USER_STORE }),
    AUTHORIZE_MW({ user_db: USER_STORE }),
    RENDER_MW({ template: 'create-recipie.ejs' })
);

ROUTER.put('/:recipie_id/edit',
    AUTH_MW({ inverse: false }),
    GET_RECIPIE_MW({ recipie_db: RECIPIE_STORE, user_db: USER_STORE }),
    AUTHORIZE_MW({ user_db: USER_STORE }),
    UPDATE_RECIPIE_MW({ recipie_db: RECIPIE_STORE }),
    REDIRECT_MW({ route: '/' })
);

// Delete
ROUTER.get('/:recipie_id/delete',
    AUTH_MW({ inverse: false }),
    GET_RECIPIE_MW({ recipie_db: RECIPIE_STORE, user_db: USER_STORE }),
    AUTHORIZE_MW({ user_db: USER_STORE }),
    DELETE_RECIPIE_MW({ recipie_db: RECIPIE_STORE }),
    REDIRECT_MW({ route: '/' })
);

// Rate
ROUTER.post('/:recipie_id/rate/:rating',
    AUTH_MW({ inverse: false }),
    GET_RECIPIE_MW({ recipie_db: RECIPIE_STORE, user_db: USER_STORE }),
    RATE_MW({ }),
    UPDATE_RECIPIE_MW({ recipie_db: RECIPIE_STORE })
);

module.exports = ROUTER;