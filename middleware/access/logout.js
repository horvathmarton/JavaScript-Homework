const LOGOUT = ({}) => {

    return (req, res, next) => {

        delete req.session.user;
        return next();

    };

};

module.exports = LOGOUT;