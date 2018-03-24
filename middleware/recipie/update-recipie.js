const RECIPIE_UPDATER = ({ recipie_db }) => {

    return (req, res, next) => {

        if ('undefined' === typeof req.locals || 'undefined' === typeof req.locals.recipie ||
            'undefined' === req.body) {
            console.log('No rating id specified!');
            res.redirect('/');
            return next();
        }

        recipie_db.addRecipie({
            id: Math.floor((Math.random() * 1000000) + 1),
            author: req.session.user.id
        });

        return next();

    };

};

module.exports = RECIPIE_UPDATER;
