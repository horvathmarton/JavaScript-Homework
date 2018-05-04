const expect = require('chai').expect;

const GET_RECIPIE_MW = require('../../middleware/recipie/get-recipie');

const FAKE_RECIPIE_DB_WITH_PROMISE = {
    findOne: (id) => {
        return {
            exec: () => { return new Promise((resolve, reject) => {

                const MATCHES = FAKE_RECIPIE_DB_WITH_PROMISE.recipies.filter(recipie => id._id === recipie._id);
                if (MATCHES.length > 0) {
                    return resolve(MATCHES[0]);
                }

                return resolve(null);

            })}
        }
    },
    recipies: [
        {
            _id: 2,
            name: 'Lecsó',
            description: 'Lorem ipsum',
            time: '45 perc',
            difficulty: 3,
            author: 2
        }
    ]
};
const FAKE_RECIPIE_DB_WITH_CALLBACK = {
    findOne: (id, callback) => {
        const MATCHES = FAKE_RECIPIE_DB_WITH_PROMISE.recipies.filter(recipie => id._id === recipie._id);
        if (MATCHES.length > 0) {
            return callback(null, MATCHES[0]);
        }

        return callback(null, null);
    },
    recipies: [
        {
            _id: 2,
            name: 'Lecsó',
            description: 'Lorem ipsum',
            time: '45 perc',
            difficulty: 3,
            author: 2
        }
    ]
};
const FAKE_RATING_DB = {
    findOne: (ids) => {
        return {
            exec: () => { return new Promise((resolve, reject) => {

                const MATCHES = FAKE_RATING_DB.ratings.filter(rating => ids.recipie === rating.recipie && ids.user === rating.user);
                if (MATCHES.length > 0) {
                    resolve(MATCHES[0]);
                }

                resolve(null);

            })}
        }
    },
    ratings: [
        {
            user: '1',
            recipie: 2,
            value: 2
        }
    ]
};

describe('GetRecipieMiddleware', () => {
    let getRecipie;
    let fakeReq;
    let fakeRes;
    let nextCalled;
    let fakeNext;

    beforeEach(() => {
        getRecipie = GET_RECIPIE_MW({ recipie_db: FAKE_RECIPIE_DB_WITH_PROMISE, rating_db: FAKE_RATING_DB });

        fakeReq = {
            session: {
                user: {
                    _id: '1'
                }
            },
            params: {
                recipie_id: 2
            }
        };

        fakeRes = {
            locals: {},
            redirect: (url) => { fakeRes.redirect_url = url; }
        };

        nextCalled = false;

        fakeNext = () => {
            nextCalled = true;
        };
    });

    it('should throw error if the recipie database is not specified', () => {
        expect(() => GET_RECIPIE_MW({ rating_db: FAKE_RATING_DB })).to.throw('No recipie database specified!');
        expect(nextCalled).to.be.false;
    });

    it('should send error message and redirect if the request params are missing', () => {
        delete fakeReq.params;

        getRecipie(fakeReq, fakeRes, null);
        expect(fakeReq.session.alert_danger).to.be.equal('No recipie id specified!');
        expect(fakeRes.redirect_url).to.be.equal('/');
        expect(nextCalled).to.be.false;
    });

    it('should send error message and redirect if the recipie is missing from request params', () => {
        delete fakeReq.params.recipie_id;

        getRecipie(fakeReq, fakeRes, null);
        expect(fakeReq.session.alert_danger).to.be.equal('No recipie id specified!');
        expect(fakeRes.redirect_url).to.be.equal('/');
        expect(nextCalled).to.be.false;
    });

    it('should return recipie, rating and author info and call next if the rating database is specified and a rating is present for the user', (done) => {
        fakeNext = () => {
            expect(fakeRes.locals.recipie).to.be.deep.equal(FAKE_RECIPIE_DB_WITH_PROMISE.recipies[0]);
            expect(fakeRes.locals.rating).to.be.equal(2);
            expect(fakeRes.locals.author).to.be.false;
            done();
        };

        getRecipie(fakeReq, fakeRes, fakeNext);
    });

    it('should return recipie, rating and author info and call next if the rating database is specified and a rating is not present for the user', (done) => {
        fakeReq.session.user._id = '2';
        fakeNext = () => {
            expect(fakeRes.locals.recipie).to.be.deep.equal(FAKE_RECIPIE_DB_WITH_PROMISE.recipies[0]);
            expect(fakeRes.locals.rating).to.be.equal(0);
            expect(fakeRes.locals.author).to.be.true;
            done();
        };

        getRecipie(fakeReq, fakeRes, fakeNext);
    });

    it('should return recipie and author info and call next if the rating database is not specified', (done) => {
        getRecipie = GET_RECIPIE_MW({ recipie_db: FAKE_RECIPIE_DB_WITH_CALLBACK });
        fakeNext = () => {
            expect(fakeRes.locals.recipie).to.be.deep.equal(FAKE_RECIPIE_DB_WITH_CALLBACK.recipies[0]);
            expect(fakeRes.locals.author).to.be.false;
            done();
        };

        getRecipie(fakeReq, fakeRes, fakeNext);
    });

    it('should return error message in alert_danger and redirect to the main page if no result found', () => {
        fakeReq.params.recipie_id = 1;
        fakeRes.redirect = (url) => {
            expect(fakeRes.locals.alert_danger).to.be.equal('Recipie not found!');
            expect(url).to.be.equal('/');
        };
        getRecipie = GET_RECIPIE_MW({ recipie_db: FAKE_RECIPIE_DB_WITH_CALLBACK });

        getRecipie(fakeReq, fakeRes, fakeNext);
    });

});