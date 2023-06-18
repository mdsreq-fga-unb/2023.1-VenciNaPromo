const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

function checkToken(token, res, callback) {
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    jwt.verify(token, process.env.TOKEN_KEY, async (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        callback(decoded);
    });
}

module.exports = checkToken;