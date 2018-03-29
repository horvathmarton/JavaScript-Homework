const LOGIN = ({ user_db }) => {

    if ('undefined' === typeof user_db) {
        throw Error('No user database specified');
    }

    return (req, res, next) => {

        let errorMessage = 'Failed to log in: ';

        if (('undefined' === typeof req.body) || ('undefined' === typeof req.body.email) ||
            ('undefined' === typeof req.body.password)) {

            errorMessage += 'Form data is missing!';
            res.locals.alert_danger = errorMessage;
            res.redirect('/login');

        }

        user_db.getUsers().forEach((user) => {
            if (req.body.email === user.email && req.body.password === user.password) {
                req.session.user = user;
                req.session.alert_success = 'Logged in successfully!';
                return next();
            }
        });

        if ('undefined' === typeof req.session.user) {
            req.session.alert_danger = 'Wrong username or password!';
            res.redirect('/login');
        }

    };

};

module.exports = LOGIN;