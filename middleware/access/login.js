const LOGIN = ({ user_db }) => {

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
                res.locals.alert_success = 'Logged in successfully!';
                return next();
            }
        });

        if ('undefined' === typeof req.session.user) {
            res.locals.alert_danger = 'Wrong username or password!';
            res.redirect('/login');
        }

    };

};

module.exports = LOGIN;