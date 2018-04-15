const RECIPIE_GETTER = ({ recipie_db }) => {

    if ('undefined' === typeof recipie_db) {
        throw Error('No recipie or user database specified!');
    }

    return (req, res, next) => {

        if (typeof req.params === 'undefined' || typeof req.params.recipie_id === 'undefined') {
            req.session.alert_danger = 'No recipie id specified!';
            res.redirect('/');
        }

        recipie_db.findOne({ _id: req.params.recipie_id }, (err, result) => {

            if (err || !result) {
                req.session.alert_danger = 'Recipie not found!';
                res.redirect('/');
            }

            res.locals.recipie = result;
            res.locals.author = (res.locals.recipie.author.toString() === req.session.user._id);
            return next();
        });

    };

};

module.exports = RECIPIE_GETTER;