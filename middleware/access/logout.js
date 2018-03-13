const LOGOUT = (req, res) => {

    delete res.locals.user;
    res.redirect('/');

};

module.exports = LOGOUT;