const FORGOTTEN = ({ user_db }) => {

    if ('undefined' === typeof user_db) {
        throw Error('No user database specified');
    }

    return (req, res, next) => {

        if (('undefined' === typeof req.body) || ('undefined' === typeof req.body.email)) {

            res.locals.alert_danger = 'Form data is missing!';
            res.redirect('/forgotten');

        }

        user_db.getUsers().forEach((user) => {
            if (req.body.email === user.email) {
                req.session.alert_success = `Your password is ${user.password}`;
                return next();
            }
        });

        if ('undefined' === typeof req.session.alert_success) {
            req.session.alert_danger = 'This email address is not registered!';
            res.redirect('/forgotten');
        }

    };

};

module.exports = FORGOTTEN;