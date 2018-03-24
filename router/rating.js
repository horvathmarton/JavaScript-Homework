const ROUTER = require('express').Router();

const RATING_STORE = require('../stores/rating-store');
const USER_STORE = require('../stores/user-store');

const AUTH_MW = require('../middleware/access/auth');
const AUTHORIZE_MW = require('../middleware/access/authorize');
const GET_ALL_RATING_MW = require('../middleware/rating/get-all-rating');
const GET_RATING_MW = require('../middleware/rating/get-rating');
const UPDATE_RATING_MW = require('../middleware/rating/update-rating');

// Get the ratings for a recipie
ROUTER.get('/:recipie_id',
    AUTH_MW({ inverse: false }),
    GET_ALL_RATING_MW({ rating_db: RATING_STORE })
);

// Get the user's rating for a recipie
ROUTER.get('/:recipie_id/:user_id',
    AUTH_MW({ inverse: false }),
    GET_RATING_MW({ rating_db: RATING_STORE })
);

// Post a new rating
ROUTER.post('/:recipie_id/:user_id',
    AUTH_MW({ inverse: false }),
    AUTHORIZE_MW({ user_db: USER_STORE }),
    GET_RATING_MW({ rating_db: RATING_STORE }),
    UPDATE_RATING_MW({ rating_db: RATING_STORE })
);