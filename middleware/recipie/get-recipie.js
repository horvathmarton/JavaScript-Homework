const RECIPIE_GETTER = ({ recipie_db, rating_db }) => {

    if ('undefined' === typeof recipie_db) {
        throw Error('No recipie database specified!');
    }

    return (req, res, next) => {

        if (typeof req.params === 'undefined' || typeof req.params.recipie_id === 'undefined') {

            req.session.alert_danger = 'No recipie id specified!';
            return res.redirect('/');

        }

        if (rating_db) {

            const recipie = recipie_db.findOne({_id: req.params.recipie_id}).exec();
            const rating = rating_db.findOne({recipie: req.params.recipie_id, user: req.session.user._id}).exec();
            return Promise.all([recipie, rating]).then((results) => {

                res.locals.recipie = results[0];
                if (results[1]) {
                    res.locals.rating = results[1].value;
                } else {
                    res.locals.rating = 0;
                }
                res.locals.author = (res.locals.recipie.author.toString() === req.session.user._id);
                return next();
            });

        }

        recipie_db.findOne({ _id: req.params.recipie_id }, (err, result) => {
            if (err || !result) {
                res.locals.alert_danger = 'Recipie not found!';
                return res.redirect('/');

            }

            res.locals.recipie = result;
            res.locals.author = (res.locals.recipie.author.toString() === req.session.user._id);
            return next();
        });

    };

};

module.exports = RECIPIE_GETTER;