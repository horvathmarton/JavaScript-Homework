const REDIRECT = (page) => {

    return (req, res) => {
        res.redirect(page);
    }

};

module.exports = REDIRECT;