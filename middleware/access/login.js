const LOGIN = ({ user_db }) => {

    return (req, res, next) => {

        let errorMessage = 'Failed to log in: ';

        if (('undefined' === typeof req.body) || ('undefined' === typeof req.body.email) ||
            ('undefined' === typeof req.body.password)) {

            errorMessage += 'Form data is missing!';
            console.log(errorMessage);
            res.redirect('/login');
            return next();

        }

        user_db.getUsers().forEach((user) => {
            if (req.body.email === user.email && req.body.password === user.password) {
                req.session.user = user;
                console.log('Logged in successfully!');
                res.redirect('/');
                return next();
            }
        });

        errorMessage += 'Wrong username or password!';
        console.log(errorMessage);
        res.redirect('/login');

    };

};

module.exports = LOGIN;