const recipieStore = require('../../stores/recipie-store');

const RECIPE_GETTER = (req, res, next) => {

    if (typeof req.param === 'undefined' || typeof req.param.id === 'undefined') {
        console.log('No recipie id specified!');
        res.redirect('/');
    }

    res.locals.recipie = recipieStore.getRecipie(req.param.id);

    if (res.locals.recipie === null) {
        console.log('Recipie not found!');
        res.redirect('/')
    }

    return next();

};

module.exports = RECIPE_GETTER;