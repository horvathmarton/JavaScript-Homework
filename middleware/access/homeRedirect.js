// Ez is el fog tűnni, ha ejs-el már dinamikusan tudom renderelni a dashboard headert
const path = require('path');
const appDir = path.dirname(require.main.filename);
const options = {
    root: appDir + '/static/'
};

const REDIRECT = (req, res, next) => {

    if (typeof req.session.user === 'undefined') {
        res.sendFile('dashboard.html', options);
    } else {
        res.sendFile('logged-in-dashboard.html', options);
    }

};

module.exports = REDIRECT;
