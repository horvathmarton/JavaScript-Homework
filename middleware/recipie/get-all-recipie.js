const RECIPIES_GETTER = ({ recipie_db }) => {

    return (req, res, next) => {

        if ('undefined' === typeof recipie_db) {
            throw Error('No recipie database specified');
        }

        res.locals.recipies = recipie_db.getRecipies();
        return next();

    };

};

module.exports = RECIPIES_GETTER;