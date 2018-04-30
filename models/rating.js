const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Rating = db.model('Rating', {
    value: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    recipie: {
        type: Schema.Types.ObjectId,
        ref: 'Recipie'
    }
});

module.exports = Rating;