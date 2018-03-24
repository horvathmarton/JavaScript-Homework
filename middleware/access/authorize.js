const AUTHORIZE = ({ user_db }) => {

    return (req, res, next) => {

        if ('undefined' === typeof user_db) {
            throw Error('No user database specified');
        }

        // Check if the active recipie is owned by the active user

    };

};

module.exports = AUTHORIZE;