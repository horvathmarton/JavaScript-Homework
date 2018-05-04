const expect = require('chai').expect;

const login_MW = require('../../middleware/access/login');

const FAKE_USER_DB = {
    findOne: (credentials, callback) => {
        const MATCHES = FAKE_USER_DB.users.filter(user => credentials.email === user.email && credentials.password === user.password);
        if (MATCHES.length > 0) {
            callback(null, MATCHES[0]);
        } else {
            callback(null, null);
        }
    },
    users: [
        {
            email: 'admin@admin.com',
            password: 'admin'
        },
        {
            email: 'average@user.com',
            password: '1234'
        }
    ]
};

describe('loginMiddleware', () => {
    let login;
    let fakeReq;
    let fakeRes;
    let nextCalled;
    let fakeNext;

    beforeEach(() => {
        login = login_MW({ user_db: FAKE_USER_DB });
        
        fakeReq = {
            session: {},
            body: {
                email: 'admin@admin.com',
                password: 'admin'
            }
        };

        fakeRes = {
            redirect: (url) => { fakeRes.redirect_url = url; }
        };

        nextCalled = false;

        fakeNext = () => {
            nextCalled = true;
        };
    });

    it('should throw error if the user database is not specified', () => {
        expect(() => login_MW({})).to.throw('No user database specified');
        expect(fakeReq.session.user).to.be.undefined;
        expect(nextCalled).to.be.false;
    });

    it('should send error message and redirect if the request body is missing', () => {
        delete fakeReq.body;

        login(fakeReq, fakeRes, null);
        expect(fakeReq.session.alert_danger).to.be.equal('Failed to log in: Form data is missing!');
        expect(fakeRes.redirect_url).to.be.equal('/login');
        expect(fakeReq.session.user).to.be.undefined;
        expect(nextCalled).to.be.false;
    });

    it('should send error message and redirect if the email is missing from the request body', () => {
        delete fakeReq.body.email;

        login(fakeReq, fakeRes, null);
        expect(fakeReq.session.alert_danger).to.be.equal('Failed to log in: Form data is missing!');
        expect(fakeRes.redirect_url).to.be.equal('/login');
        expect(fakeReq.session.user).to.be.undefined;
        expect(nextCalled).to.be.false;
    });

    it('should send error message and redirect if the password is missing from the request body', () => {
        delete fakeReq.body.password;

        login(fakeReq, fakeRes, null);
        expect(fakeReq.session.alert_danger).to.be.equal('Failed to log in: Form data is missing!');
        expect(fakeRes.redirect_url).to.be.equal('/login');
        expect(fakeReq.session.user).to.be.undefined;
        expect(nextCalled).to.be.false;
    });

    it('should send faliure message, not create session and redirect if non-existing email given', () => {
        fakeReq.body.email = 'lorem@ipsum.com';

        login(fakeReq, fakeRes, fakeNext);
        expect(fakeReq.session.alert_danger).to.be.equal('Wrong username or password!');
        expect(fakeRes.redirect_url).to.be.equal('/login');
        expect(fakeReq.session.user).to.be.undefined;
        expect(nextCalled).to.be.false;
    });

    it('should send faliure message, not create session and redirect if existing email, but incorrect password given', () => {
        fakeReq.body.password = 'hello';

        login(fakeReq, fakeRes, fakeNext);
        expect(fakeReq.session.alert_danger).to.be.equal('Wrong username or password!');
        expect(fakeRes.redirect_url).to.be.equal('/login');
        expect(fakeReq.session.user).to.be.undefined;
        expect(nextCalled).to.be.false;
    });

    it('should send success message, create session and call next if existing email and correct password given', () => {
        login(fakeReq, fakeRes, fakeNext);
        expect(fakeReq.session.alert_success).to.be.equal('Logged in successfully!');
        expect(fakeReq.session.user).to.deep.equal({ email: 'admin@admin.com', password: 'admin' });
        expect(nextCalled).to.be.true;
    });
});