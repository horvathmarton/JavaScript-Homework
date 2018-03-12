const userStore = require('../../stores/user-store');

const LOGIN = (req, res, next) => {

    if ((typeof req.body === 'undefined') || (typeof req.body.email === 'undefined') || (typeof req.body.password === 'undefined')) {
        res.end('Problem');
    }

    userStore.getUsers().forEach((user) => {
        if (user.email === req.body.email && user.password === req.body.password) {
            res.locals.user = user;
            console.log('Logged in successfully!');
            res.redirect('/');
        }
    });

    res.redirect('/login');

};

module.exports = LOGIN;