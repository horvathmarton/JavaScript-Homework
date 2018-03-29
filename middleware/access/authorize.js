const AUTHORIZE = ({ user_db }) => {

    if ('undefined' === typeof user_db) {
        throw Error('No user database specified');
    }

    return (req, res, next) => {

        if (!req.session.user.recipies.includes(res.locals.recipie.id)) {
            req.session.alert_danger('Unauthorized operation on this recipie!');
            res.redirect('/');
        }

        return next();

    };

};

module.exports = AUTHORIZE;