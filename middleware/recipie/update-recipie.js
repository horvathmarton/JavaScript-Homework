const CHECK_REQUEST_BODY = (req) => {
    return ('undefined' === typeof req.body || 'undefined' === typeof req.body.name ||
        'undefined' === typeof req.body.time || 'undefined' === req.body.difficulty ||
        'undefined' === typeof req.body.description)
};

const RECIPIE_UPDATER = ({ recipie_model }) => {

    if ('undefined' === typeof recipie_model) {
        throw Error('No recipie model specified');
    }

    return (req, res, next) => {

        if (CHECK_REQUEST_BODY(req)) {
            req.session.alert_danger = 'Invalid form data!';
            res.redirect('/');
        }

        let recipie = undefined;
        if ('undefined' === typeof res.locals.recipie) {
            recipie = new recipie_model();
        } else {
            recipie = res.locals.recipie;
        }

        recipie.name = req.body.name;
        recipie.time = req.body.time;
        recipie.difficulty = req.body.difficulty;
        recipie.description = req.body.description;
        recipie.author = req.session.user._id;
        recipie.save(() => {
            return next();
        });

    };

};

module.exports = RECIPIE_UPDATER;
