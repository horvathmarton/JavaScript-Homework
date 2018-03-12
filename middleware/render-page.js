const RENDERER = (page) => {

    return (req, res) => {
        res.redirect(page);
    }

};

module.exports = RENDERER;