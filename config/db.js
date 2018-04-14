const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/recipie');

module.exports = mongoose;