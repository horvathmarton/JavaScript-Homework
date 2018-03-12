const userStore = require('../../stores/user-store');

const REGISTER = (req, res, next) => {

    if ((typeof req.body === 'undefined') || (typeof req.body.email === 'undefined') || (typeof req.body.password === 'undefined')) {
        res.redirect('/register');
    }

    userStore.addUser({
       id: Math.random(),
       email: req.body.email,
       password: req.body.password
    });

    res.redirect('/');

};

module.exports = REGISTER;