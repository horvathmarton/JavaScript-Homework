const recipieStore = require('../../stores/recipie-store');

const RECIPES_GETTER = (req, res, next) => {

    res.locals.recipies = recipieStore.getRecipies();
    next();

};

module.exports = RECIPES_GETTER;