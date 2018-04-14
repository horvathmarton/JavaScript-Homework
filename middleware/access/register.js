const REGISTER = ({ user_db }) => {

    if ('undefined' === typeof user_db) {
        throw Error('No user database specified');
    }

    return (req, res, next) => {

        let errorMessage = 'Failed to register: ';

        if (('undefined' === typeof req.body) || ('undefined' === typeof req.body.email) ||
            ('undefined' === typeof req.body.password) || ('undefined' === typeof req.body.name)) {

            errorMessage += 'Form data is missing!';
            req.session.alert_danger = errorMessage;
            res.redirect('/register');

        }

        user_db.insert({
            email: req.body.email,
            name: req.body.name,
            password: req.body.password
        });

        req.session.alert_success = 'Registration is successful! Please log in!';
        res.redirect('/login');

    };

};

module.exports = REGISTER;