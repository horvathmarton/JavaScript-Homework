// Bocsánat, ez az egész middleware egy beautiful hack, de nincs szívem törölni :D
const XOR = (cond1, cond2) => {
    return (cond1 && !cond2) || (!cond1 && cond2);
};

// Check if the user logged in (or logged out if the inverse flag is true)
const AUTHENTICATE = ({ inverse = false }) => {

    let redirectUrl = '/';
    if (!inverse) { redirectUrl += 'login'; }

    return (req, res, next) => {

        if (XOR(inverse, 'undefined' === typeof req.session.user)) {
            console.log('Authentication failed!');
            res.redirect(redirectUrl);
            return next();
        }

        console.log('Authentication succeeded!');
        return next();

    };

};

module.exports = AUTHENTICATE;