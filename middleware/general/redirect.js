const REDIRECT = ({ route = '/' }) => {

    return (req, res) => {
        res.redirect(route);
    }

};

module.exports = REDIRECT;