const REDIRECT = (endpoint) => {

    return (req, res) => {
        res.redirect(endpoint);
    }

};

module.exports = REDIRECT;