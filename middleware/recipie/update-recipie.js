const RECIPIE_UPDATER = ({ recipie_db }) => {

    if ('undefined' === typeof recipie_db) {
        throw Error('No recipie database specified');
    }

    return (req, res, next) => {

        if ('undefined' === typeof req.locals || 'undefined' === typeof req.locals.recipie ||
            'undefined' === req.body) {
            req.session.alert_danger = 'No rating id specified!';
            res.redirect('/');
        }

        recipie_db.addRecipie({
            id: Math.floor((Math.random() * 1000000) + 1), // TODO: Implement
            name: 'Lecsó',
            description: 'Lorem ipsum',
            time: 45,
            difficulty: 3,
            ratings: {
                2: 4,
                3: 1
            }
        });

        return next();

    };

};

module.exports = RECIPIE_UPDATER;
