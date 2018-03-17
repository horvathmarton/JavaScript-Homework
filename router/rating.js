const express = require('express');

const ROUTER = express.Router();

ROUTER.get('/:recipie_id',
    // AUTH_MW,
    // GET_ALL_RATINGS_MW
);

ROUTER.get('/:recipie_id/:user_id',
    // AUTH_MW,
    // GET_RATING_MW
);

ROUTER.post('/:recipie_id/:user_id',
    // AUTH_MW,
    // AUTHORIZE_MW,
    // GET_RATING_MW,
    // UPDATE_RATING_MW
);