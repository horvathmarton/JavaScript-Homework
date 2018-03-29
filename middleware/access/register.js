const REGISTER = ({ user_db }) => {

    if ('undefined' === typeof user_db) {
        throw Error('No user database specified');
    }

    return (req, res, next) => {

        let errorMessage = 'Failed to register: ';

        if (('undefined' === typeof req.body) || ('undefined' === typeof req.body.email) ||
            ('undefined' === typeof req.body.password)) {

            errorMessage += 'Form data is missing!';
            req.session.alert_danger = errorMessage;
            res.redirect('/register');

        }

        user_db.addUser({
            id: Math.floor((Math.random() * 1000000) + 1),
            email: req.body.email,
            password: req.body.password
        });

        req.session.alert_success = 'Registration is successful! Please log in!';
        res.redirect('/login');

    };

};

module.exports = REGISTER;