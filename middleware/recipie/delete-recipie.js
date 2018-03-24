const RECIPIE_DELETER = ({ recipie_db }) => {

    return (req, res, next) => {

        if ('undefined' === typeof recipie_db) {
            throw Error('No recipie database specified');
        }

        recipie_db.deleteRecipie(req.locals.recipie.id);
        return next();

    };

};

module.exports = RECIPIE_DELETER;
