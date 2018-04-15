const RECIPIES_GETTER = ({ recipie_db }) => {

    if ('undefined' === typeof recipie_db) {
        throw Error('No recipie database specified');
    }

    return (req, res, next) => {

        recipie_db.find({

        }, (err, result) => {
            res.locals.recipies = result;
            return next();
        });

    };

};

module.exports = RECIPIES_GETTER;