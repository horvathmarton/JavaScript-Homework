const RECIPIE_GETTER = ({ recipie_db }) => {

    return (req, res, next) => {

        if ('undefined' === typeof recipie_db) {
            throw Error('No recipie database specified');
        }

        if (typeof req.params === 'undefined' || typeof req.params.recipie_id === 'undefined') {
            console.log('No recipie id specified!');
            res.redirect('/');
            return next();
        }

        res.locals.recipie = recipie_db.getRecipie(parseInt(req.params.recipie_id));

        if (null === res.locals.recipie) {
            console.log('Recipie not found!');
            res.redirect('/');
        }

        return next();

    };

};

module.exports = RECIPIE_GETTER;