const REGISTER = ({ user_model }) => {

    if ('undefined' === typeof user_model) {
        throw Error('No user model specified');
    }

    return (req, res, next) => {

        let errorMessage = 'Failed to register: ';

        if (('undefined' === typeof req.body) || ('undefined' === typeof req.body.email) ||
            ('undefined' === typeof req.body.password) || ('undefined' === typeof req.body.name)) {

            errorMessage += 'Form data is missing!';
            req.session.alert_danger = errorMessage;
            res.redirect('/register');

        }

        const user = new user_model();
        user.email = req.body.email;
        user.name = req.body.name;
        user.password = req.body.password;

        user.save((err) => {});

        req.session.alert_success = 'Registration is successful! Please log in!';
        res.redirect('/login');

    };

};

module.exports = REGISTER;