const router = require("express").Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

function isValidEmail(email) {
    const emailRegex = /^[a-z0-9]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

router.post('/register', (req, res) => {
    const { username, email, password, flag } = req.body;
  
    if (!isValidEmail(email)) {
      return res.status(400).json({ message: 'Invalid email' });
    }
    
    // find if email already exists, if not, create new user
    User.findOne({ email }).then(user => {
        if (user) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        if(flag != 0 || flag != 1){
            return res.status(400).json({ message: 'Invalid flag' });
        }
        const hashedPassword = bcrypt.hashSync(password, 10);
        const newUser = new User({
            user_flag: flag,
            name: username,
            email: email,
            password: hashedPassword,
        });
        newUser.save().then(() => {
            return res.status(201).json({ message: 'User created' });
        }).catch(err => {
            return res.status(400).json({ message: 'Invalid data' });
        });
    });
});
  
router.post('/login', (req, res) => {
    const { email, password } = req.body;
  
    // find user by email
    const logging_user = User.find(user => user.email === email);
    if (!logging_user) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }
  
    const passwordMatch = bcrypt.compareSync(password, logging_user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
  
    const tokenkey = 'hjZ8N0z#6$B3!xVqJ@5cF';
    const token = jwt.sign({ email: logging_user.email }, tokenkey);
  
    res.json({ token });
});

module.exports = router;