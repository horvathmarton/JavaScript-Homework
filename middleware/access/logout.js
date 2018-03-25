const LOGOUT = ({}) => {

    return (req, res, next) => {

        delete req.session.user;
        res.locals.alert_success = 'Logged out successfully!';
        return next();

    };

};

module.exports = LOGOUT;