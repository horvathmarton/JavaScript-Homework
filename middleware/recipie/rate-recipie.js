const ObjectId = require('mongoose').Types.ObjectId;

const RATER = ({ rating_model }) => {

    if ('undefined' === typeof rating_model) {
        throw Error('No rating model specified');
    }

    return (req, res, next) => {

        if (typeof req.params === 'undefined' || typeof req.params.rating === 'undefined') {
            req.session.alert_danger = 'No rating specified!';
            res.redirect('/');
        }

        rating_model.findOne({
            user: req.session.user._id,
            recipie: res.locals.recipie._id
        }, (err, result) => {
            if (err) {
                req.session.alert_danger = 'Unexpected error happened!';
                res.redirect('/');
            }

            if (!result) {
                result = new rating_model();
                result.user = req.session.user._id;
                result.recipie = res.locals.recipie._id;
            }

            result.value = req.params.rating;
            result.save(() => {
                return next();
            });
        });
    };

};

module.exports = RATER;