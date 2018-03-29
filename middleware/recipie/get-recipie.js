const RECIPIE_GETTER = ({ recipie_db }) => {

    if ('undefined' === typeof recipie_db) {
        throw Error('No recipie database specified');
    }

    return (req, res, next) => {

        if (typeof req.params === 'undefined' || typeof req.params.recipie_id === 'undefined') {
            req.session.alert_danger = 'No recipie id specified!';
            res.redirect('/');
        }

        res.locals.recipie = recipie_db.getRecipie(parseInt(req.params.recipie_id));

        if (null === res.locals.recipie) {
            req.session.alert_danger = 'Recipie not found!';
            res.redirect('/');
        }

        return next();

    };

};

module.exports = RECIPIE_GETTER;