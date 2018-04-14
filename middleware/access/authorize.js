const AUTHORIZE = ({}) => {

    return (req, res, next) => {

        if (res.locals.recipie.author !== req.session.user.id) {
            req.session.alert_danger ='Unauthorized operation on this recipie!';
            res.redirect('/');
        }

        return next();

    };

};

module.exports = AUTHORIZE;