const userStore = require('../../stores/user-store');

const LOGIN = (req, res, next) => {

    let errorMessage = 'Failed to log in: ';

    if ((typeof req.body === 'undefined') || (typeof req.body.email === 'undefined') ||
        (typeof req.body.password === 'undefined')) {

        errorMessage += 'Form data is missing!';
        console.log(errorMessage);
        res.redirect('/login');

    }

    userStore.getUsers().forEach((user) => {
        if (user.email === req.body.email && user.password === req.body.password) {
            req.session.user = user;
            console.log('Logged in successfully!');
            res.redirect('/');
        }
    });

    if (typeof req.session.user === 'undefined') {
        errorMessage += 'Wrong username or password!';
        console.log(errorMessage);
        res.redirect('/login');
    }

};

module.exports = LOGIN;