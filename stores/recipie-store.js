// Átmeneti megoldás (adatbázis mock)
const recipieStore = [
    {
        id: 1,
        name: 'Marhapörkölt',
        description: 'Lorem ipsum',
        time: 15,
        difficulty: 2,
        ratings: {
            1: 5,
            3: 2
        },
        author: 1
    },
    {
        id: 2,
        name: 'Lecsó',
        description: 'Lorem ipsum',
        time: 45,
        difficulty: 3,
        ratings: {
            2: 4,
            3: 1
        },
        author: 2
    },
    {
        id: 3,
        name: 'Kuglóf',
        description: 'Lorem ipsum',
        time: 30,
        difficulty: 'hard',
        ratings: {},
        author: 1
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

const updateRecipie = (id, recipie) => {
    this.deleteRecipie(id);
    this.addRecipie(recipie);
};

module.exports.getRecipies = getRecipies;
module.exports.getRecipie = getRecipie;
module.exports.addRecipie = addRecipie;
module.exports.deleteRecipie = deleteRecipie;
module.exports.updateRecipie = updateRecipie;
