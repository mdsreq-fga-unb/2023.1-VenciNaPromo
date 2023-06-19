const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require("jsonwebtoken");
const checkToken = require('../utils/tokenquery');

router.get('/profile', (req, res) => {
    const token = req.headers['authorization'].split(' ')[1]
    checkToken(token, res, async (decoded) => {
        User.findById(decoded.id).then(user => {
            return res.status(200).json({ message: 'ok', user: user });
        }).catch(err => {
            return res.status(500).json({ message: 'Internal server errors' });
        });
    });
});
    

module.exports = router;