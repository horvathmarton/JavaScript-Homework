const RENDERER = ({ template }) => {

    if ('undefined' === typeof template) {
        throw Error('No template specified');
    }

    return (req, res) => {
        const opts = {
            logged_id: ('undefined' === typeof req.session.user),
            user: req.session.user
        };
        res.render(template, opts);
    }

};

module.exports = RENDERER;