const recipieStore = require('../../stores/recipie-store');

const RECIPE_GETTER = (req, res, next) => {

    console.log(req.params);

    if (typeof req.params === 'undefined' || typeof req.params.id === 'undefined') {
        console.log('No recipie id specified!');
        res.redirect('/');
    }

    res.locals.recipie = recipieStore.getRecipie(parseInt(req.params.id));

    if (res.locals.recipie === null) {
        console.log('Recipie not found!');
        res.redirect('/');
    }

    return next();

};

module.exports = RECIPE_GETTER;