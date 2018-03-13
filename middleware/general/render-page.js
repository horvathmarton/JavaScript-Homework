const path = require('path');
const appDir = path.dirname(require.main.filename);
const options = {
    root: appDir + '/static/'
};

const RENDERER = (template) => {

    // Ez majd rendes renderelés lesz, ha már tanultuk az ejs-t
    return (req, res) => {
        res.sendFile(template, options);
    }

};

module.exports = RENDERER;