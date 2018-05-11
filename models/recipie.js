const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Recipie = db.model('Recipie', {
    name: String,
    description: String,
    time: Number,
    difficulty: {
        type: Number,
        enum: [1, 2, 3, 4, 5]
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = Recipie;