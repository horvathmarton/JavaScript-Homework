const RENDERER = (template) => {

    // Ez majd rendes renderelés lesz, ha már tanultuk az ejs-t
    return (req, res, next) => {
        res.redirect(template);
    }

};

module.exports = RENDERER;