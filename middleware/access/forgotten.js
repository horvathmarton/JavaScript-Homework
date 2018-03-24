const FORGOTTEN = ({ user_db }) => {

    return (req, res, next) => {

        let errorMessage = 'Failed to log in: ';

        if (('undefined' === typeof req.body) || ('undefined' === typeof req.body.email)) {

            errorMessage += 'Form data is missing!';
            console.log(errorMessage);
            res.redirect('/forgotten');
            return next();

        }

        user_db.getUsers().forEach((user) => {
            if (req.body.email === user.email) {
                console.log('Email address found!');
                res.send({'password': password});
                return next();
            }
        });

        errorMessage += 'This email address is not registered!';
        console.log(errorMessage);
        res.redirect('/forgotten');
        return next();

    };

};

module.exports = FORGOTTEN;