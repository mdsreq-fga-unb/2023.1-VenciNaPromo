const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require("jsonwebtoken");

function checkTokenAndFindUser(token, res, callback) {
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    jwt.verify(token, process.env.TOKEN_KEY, async (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const user = await User.findById(decoded.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        callback(user);
    });
}

router.get('/profile', (req, res) => {
    const token = req.headers['authorization'].split(' ')[1]
    checkTokenAndFindUser(token, res, (user) => {
        return res.status(200).json({ message: 'ok', user: user });
    });
});
    

module.exports = router;