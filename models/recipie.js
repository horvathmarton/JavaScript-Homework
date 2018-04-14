const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Comment = db.model('Recipie', {
    name: String,
    description: String,
    time: {
        type: Number,
        enum: [15, 30, 45, 60]
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