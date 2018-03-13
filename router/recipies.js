const express = require('express');

const AUTH_MW = require('../middleware/access/auth');
const RENDER_MW = require('../middleware/general/render-page');
const GET_ALL_RECIPIES_MW = require('../middleware/recipie/get-all-recipie');
const GET_RECIPIE_MW = require('../middleware/recipie/get-recipie');

const ROUTER = express.Router();

ROUTER.get('/',
    GET_ALL_RECIPIES_MW,
    RENDER_MW('/dashboard.html')
);

ROUTER.get('/new',
    AUTH_MW(),
    RENDER_MW('/createrecipie.html')
);

// ROUTER.post('/new',
//     AUTH_MW(),
//     UPDATE_RECIPIE_MW,
//     REDIRECT_MW('/recipes')
// );

ROUTER.get('/:id',
    AUTH_MW(),
    GET_RECIPIE_MW,
    RENDER_MW('/recipie.html')
);

// ROUTER.get('/:id/edit',
//     AUTH_MW(),
//     AUTHORIZE_MW,
//     GET_RECIPIE_MW,
//     RENDER_MW('/createrecipie.html')
// );
//
// ROUTER.put('/:id/edit',
//     AUTH_MW(),
//     AUTHORIZE_MW,
//     GET_RECIPIE_MW,
//     UPDATE_RECIPIE_MW
// );
//
// ROUTER.delete('/:id/delete',
//     AUTH_MW(),
//     AUTHORIZE_MW,
//     GET_RECIPIE_MW,
//     DELETE_RECIPIE_MW
// );

module.exports = ROUTER;