const FORGOTTEN = ({ user_db }) => {

    if ('undefined' === typeof user_db) {
        throw Error('No user database specified');
    }

    return (req, res, next) => {

        if (('undefined' === typeof req.body) || ('undefined' === typeof req.body.email)) {

            res.locals.alert_danger = 'Form data is missing!';
            res.redirect('/forgotten');

        }

        user_db.findOne({
            email: req.body.email
        }, (err, result) => {

            if (err || !result) {
                req.session.alert_danger = 'This email address is not registered!';
                return res.redirect('/forgotten');
            }

            req.session.alert_success = `Your password is ${result.password}`;
            return next();

        });
    };

};

module.exports = FORGOTTEN;