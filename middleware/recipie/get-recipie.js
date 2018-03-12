const recipieStore = require('../../stores/recipie-store');

const RECIPE_GETTER = (req, res, next) => {

    if (typeof req.param === 'undefined' || typeof req.param.id === 'undefined') {
        res.redirect('/')
    }

    res.locals.recipie = recipieStore.getRecipie(req.param.id);
    return next();

};

module.exports = RECIPE_GETTER;