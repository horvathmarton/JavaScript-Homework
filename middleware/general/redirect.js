const REDIRECT = ({ route = '/' }) => {

    return (req, res, next) => {
        res.redirect(route);
        return next();
    }

};

module.exports = REDIRECT;