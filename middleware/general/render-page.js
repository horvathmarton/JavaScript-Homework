const RENDERER = ({ template }) => {

    return (req, res) => {
        const opts = {
            logged_id: ('undefined' === typeof req.session.user),
            user: req.session.user
        };
        res.render(template, opts);
    }

};

module.exports = RENDERER;