// Bocsánat, ez az egész middleware egy beautiful hack, de nincs szívem törölni :D
const XOR = (cond1, cond2) => {
    return (cond1 && !cond2) || (!cond1 && cond2);
};

const AUTH = (inverse = false) => {

    let redirectUrl = '/';
    if (!inverse) { redirectUrl += 'login'; }

    return (req, res, next) => {

        if (XOR(inverse, typeof req.session.user === 'undefined')) {
            console.log('Authentication failed!');
            res.redirect(redirectUrl);
        } else {
            console.log('Authentication succeeded!');
            return next();
        }

    };

};

module.exports = AUTH;