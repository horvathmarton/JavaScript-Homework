const XOR = (cond1, cond2) => {
    return (cond1 && !cond2) || (!cond1 && cond2);
};

const AUTH = (inverse = false) => {

    return (req, res, next) => {
        if (XOR(inverse, res.locals.user === 'undefined')) {
            // res.redirect('/login');
            console.log('Not logged in at the moment!');
        }
        next();
    };

};

module.exports = AUTH;