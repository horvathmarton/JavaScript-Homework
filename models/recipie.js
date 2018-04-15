const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Recipie = db.model('Recipie', {
    name: String,
    description: String,
    time: {
        type: String,
        enum: ['15 perc', '30 perc', '45 perc', '1 óra', '1.5 óra', '2 óra']
    },
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