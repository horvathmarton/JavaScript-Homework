const LOGOUT = (req, res, next) => {
    delete res.locals.user;
    res.redirect('/');
};

module.exports = LOGOUT;