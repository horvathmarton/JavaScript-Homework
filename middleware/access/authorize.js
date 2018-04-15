const AUTHORIZE = ({}) => {

    return (req, res, next) => {

        if (res.locals.recipie.author.toString() !== req.session.user._id) {
            req.session.alert_danger ='Unauthorized operation on this recipie!';
            res.redirect('/');
        }

        return next();

    };

};

module.exports = AUTHORIZE;