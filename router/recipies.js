const ROUTER = require('express').Router();

const RECIPIE_STORE = require('../stores/recipie-store');
const USER_STORE = require('../stores/user-store');

const AUTH_MW = require('../middleware/access/auth');
const AUTHORIZE_MW = require('../middleware/access/authorize');
const DELETE_RECIPIE_MW = require('../middleware/recipie/delete-recipie');
const GET_ALL_RECIPIE_MW = require('../middleware/recipie/get-all-recipie');
const GET_RECIPIE_MW = require('../middleware/recipie/get-recipie');
const RENDER_MW = require('../middleware/general/render-page');
const UPDATE_RECIPIE_MW = require('../middleware/recipie/update-recipie');

// List all
ROUTER.get('/',
    GET_ALL_RECIPIE_MW({ recipie_db: RECIPIE_STORE }),
    RENDER_MW({ template: 'dashboard.html' })
);

// Create new
ROUTER.get('/new',
    AUTH_MW({ inverse: false }),
    RENDER_MW({ template: 'create-recipie.html' })
);

ROUTER.post('/new',
    AUTH_MW({ inverse: false }),
    UPDATE_RECIPIE_MW({ recipie_db: RECIPIE_STORE }),
    REDIRECT_MW({ route: '/recipes' })
);

// View one
ROUTER.get('/:id',
    AUTH_MW({ inverse: false }),
    GET_RECIPIE_MW({ recipie_db: RECIPIE_STORE }),
    RENDER_MW({ template: 'recipie.html' })
);

// Edit
ROUTER.get('/:id/edit',
    AUTH_MW({ inverse: false }),
    AUTHORIZE_MW({ user_db: USER_STORE }),
    GET_RECIPIE_MW({ recipie_db: RECIPIE_STORE }),
    RENDER_MW({ template: 'create-recipie.html' })
);

ROUTER.put('/:id/edit',
    AUTH_MW({ inverse: false }),
    AUTHORIZE_MW({ user_db: USER_STORE }),
    GET_RECIPIE_MW({ recipie_db: RECIPIE_STORE }),
    UPDATE_RECIPIE_MW({ recipie_db: RECIPIE_STORE })
);

// Delete
ROUTER.delete('/:id/delete',
    AUTH_MW({ inverse: false }),
    AUTHORIZE_MW({ user_db: USER_STORE }),
    GET_RECIPIE_MW({ recipie_db: RECIPIE_STORE }),
    DELETE_RECIPIE_MW({ recipie_db: RECIPIE_STORE })
);

module.exports = ROUTER;