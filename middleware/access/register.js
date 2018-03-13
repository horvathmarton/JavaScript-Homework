const userStore = require('../../stores/user-store');

const REGISTER = (req, res) => {

    let errorMessage = 'Failed to register: ';

    if ((typeof req.body === 'undefined') || (typeof req.body.email === 'undefined') ||
        (typeof req.body.password === 'undefined')) {

        errorMessage += 'Form data is missing!';
        console.log(errorMessage);
        res.redirect('/register');

    }

    userStore.addUser({
       id: Math.floor((Math.random() * 1000000) + 1),
       email: req.body.email,
       password: req.body.password
    });

    res.redirect('/');

};

module.exports = REGISTER;