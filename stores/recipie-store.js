// Átmeneti megoldás (adatbázis mock)
const recipieStore = [
    {
        id: 1,
        name: 'Marhapörkölt',
        description: 'Lorem ipsum'
    },
    {
        id: 2,
        name: 'Lecsó',
        description: 'Lorem ipsum'
    },
    {
        id: 3,
        name: 'Kuglóf',
        description: 'Lorem ipsum'
    }
];

const getRecipies = () => {
    return recipieStore;
};

const getRecipie = (id) => {
    let recipie = null;
    recipieStore.forEach((rec) => {
        if (rec.id === id) {
            recipie = rec;
        }
    });
    return recipie;
};

const addRecipie = (recipie) => {
    recipieStore.push(recipie);
};

const deleteRecipie = (id) => {
    const recipie = getRecipie(id);
    const index = recipie.indexOf(recipie);
    recipieStore.splice(index, 1);
};

module.exports.getRecipies = getRecipies;
module.exports.getRecipie = getRecipie;
module.exports.addRecipie = addRecipie;
module.exports.deleteRecipie = deleteRecipie;
