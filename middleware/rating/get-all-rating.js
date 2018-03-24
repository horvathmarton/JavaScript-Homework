const RATINGS_GETTER = ({ rating_db }) => {

    return (req, res, next) => {
        res.locals.ratings =  rating_db.getRatings();
        return next();
    };

};

module.exports = RATINGS_GETTER;