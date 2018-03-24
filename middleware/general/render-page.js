const path = require('path');
const appDir = path.dirname(require.main.filename);
const options = {
    root: appDir + '/static/'
};

const RENDERER = ({ template }) => {

    return (req, res) => {
        res.sendFile(template, options);
    }

};

module.exports = RENDERER;