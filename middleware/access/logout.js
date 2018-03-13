const LOGOUT = (req, res) => {

    delete req.session.user;
    res.redirect('/');

};

module.exports = LOGOUT;