const LOGOUT = ({}) => {

    return (req, res, next) => {

        delete req.session.user;
        res.redirect('/');
        return next();

    };

};

module.exports = LOGOUT;