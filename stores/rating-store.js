// Átmeneti megoldás (adatbázis mock)
const ratingStore = [
    {
        id: 0,
        value: 5,
        recipie_id: 1,
        user_id: 1
    },
    {
        id: 1,
        value: 5,
        recipie_id: 1,
        user_id: 2
    }
];

const getRatings = () => {
    return ratingStore;
};

const getRating = (id) => {
    ratingStore.forEach((rating) => {
        if (id === rating.id) {
            return rating;
        }
    });
    return null;
};

const addRating = (rating) => {
    ratingStore.push(rating);
};

module.exports.getRatings = getRatings;
module.exports.getRating = getRating;
module.exports.addRating = addRating;
