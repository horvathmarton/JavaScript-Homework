const RECIPIE_GETTER = ({ recipie_db, user_db }) => {

    if ('undefined' === typeof recipie_db || 'undefined' === typeof user_db) {
        throw Error('No recipie or user database specified!');
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

        res.locals.author = (res.locals.recipie.author === req.session.user.id);
        return next();

    };

};

module.exports = RECIPIE_GETTER;