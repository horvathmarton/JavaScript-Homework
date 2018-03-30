const CHECK_REQUEST_BODY = (req) => {
    return ('undefined' === typeof req.body || 'undefined' === typeof req.body.name ||
        'undefined' === typeof req.body.time || 'undefined' === req.body.difficulty ||
        'undefined' === typeof req.body.description)
};

const RECIPIE_UPDATER = ({ recipie_db }) => {

    if ('undefined' === typeof recipie_db) {
        throw Error('No recipie database specified');
    }

    return (req, res, next) => {

        if (CHECK_REQUEST_BODY(req)) {
            req.session.alert_danger = 'Invalid form data!';
            res.redirect('/');
        }

        if ('undefined' !== typeof req.body.id || 'undefined' === typeof res.locals.recipie) {
            const recipie = {
                name: req.body.name,
                time: req.body.time,
                difficulty: req.body.difficulty,
                description: req.body.description,
                ratings: {},
                author: req.session.user.id
            };

            if ('undefined' === typeof req.body.id) {
                recipie.id = Math.floor((Math.random() * 1000000) + 1);
                recipie_db.addRecipie(recipie);
            } else {
                recipie.id = req.body.id;
                recipie_db.updateRecipie(recipie.id, recipie);
            }

        } else {
            recipie_db.updateRecipie(res.locals.recipie.id, res.locals.recipie);
        }

        return next();

    };

};

module.exports = RECIPIE_UPDATER;
