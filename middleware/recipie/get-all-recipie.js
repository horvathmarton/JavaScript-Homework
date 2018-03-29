const RECIPIES_GETTER = ({ recipie_db }) => {

    if ('undefined' === typeof recipie_db) {
        throw Error('No recipie database specified');
    }

    return (req, res, next) => {

        res.locals.recipies = recipie_db.getRecipies();
        return next();

    };

};

module.exports = RECIPIES_GETTER;