const RATING_GETTER = ({ rating_db }) => {
    
    return (req, res, next) => {

        if ('undefined' === typeof req.locals || 'undefined' === typeof req.locals.recipie) {
            console.log('No rating id specified!');
            res.redirect('/');
            return next();
        }
        
        res.locals.rating = rating_db.getRating(req.locals.recipie.id, req.session.user.id);
        
        if (null === res.locals.rating) {
            res.locals.rating = {
                value: 0
            };
        }
        
        return next();
        
    };
    
};

module.exports = RATING_GETTER;
