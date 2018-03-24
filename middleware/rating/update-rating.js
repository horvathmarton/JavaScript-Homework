const RATING_UPDATER = ({ rating_db }) => {

    return (req, res, next) => {

        if ('undefined' === typeof req.locals || 'undefined' === typeof req.locals.recipie ||
            'undefined' === req.body || 'undefined' === req.body.value) {
            console.log('No rating id specified!');
            res.redirect('/');
            return next();
        }

        rating_db.addRating({
            id: Math.floor((Math.random() * 1000000) + 1),
            value: req.body.value,
            recipie_id: req.locals.recipie.id,
            user_id: req.session.user.id
        });

        return next();

    };

};

module.exports = RATING_UPDATER;
