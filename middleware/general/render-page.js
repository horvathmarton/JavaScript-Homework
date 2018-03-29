const RENDERER = ({ template }) => {

    return (req, res) => {
        const opts = {
            logged_id: ('undefined' === typeof req.session.user),
            user: req.session.user,
            authorized: true,
            alert_danger: req.session.alert_danger || undefined,
            alert_success: req.session.alert_success || undefined
        };
        res.render(template, opts);
    }

};

module.exports = RENDERER;