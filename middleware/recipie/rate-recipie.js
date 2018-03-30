const RATER = ({ }) => {

    return (req, res, next) => {

        if (typeof req.params === 'undefined' || typeof req.params.rating === 'undefined') {
            req.session.alert_danger = 'No rating specified!';
            res.redirect('/');
        }

        res.locals.recipie.ratings[req.session.user.id] = req.params.rating;
        return next();
    };

};

module.exports = RATER;