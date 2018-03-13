const RENDERER = (template) => {

    // Ez majd rendes renderelés lesz, ha már tanultuk az ejs-t
    return (req, res) => {
        res.redirect(template);
    }

};

module.exports = RENDERER;