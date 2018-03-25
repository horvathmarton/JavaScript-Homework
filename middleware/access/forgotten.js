const FORGOTTEN = ({ user_db }) => {

    return (req, res, next) => {

        let errorMessage = 'Failed to log in: ';

        if (('undefined' === typeof req.body) || ('undefined' === typeof req.body.email)) {

            errorMessage += 'Form data is missing!';
            res.locals.alert_danger = errorMessage;
            res.redirect('/forgotten');

        }

        user_db.getUsers().forEach((user) => {
            if (req.body.email === user.email) {
                console.log('Email address found!');
                res.send({password: user.password});
                return next();
            }
        });

        errorMessage += 'This email address is not registered!';
        res.locals.alert_danger = errorMessage;
        res.redirect('/forgotten');

    };

};

module.exports = FORGOTTEN;