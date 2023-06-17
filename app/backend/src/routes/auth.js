const router = require("express").Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

function isValidEmail(email) {
    const emailRegex = /^[a-z0-9]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


function isValidEmail(email) {
    const emailRegex = /^[a-z0-9]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidEmail(email) {
    const emailRegex = /^[a-z0-9]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidName(name) {
    const nameRegex = /^[\p{L}\s]+$/u;
    return nameRegex.test(name);
}

function isValidPassword(password) {
    if (password.length < 8) {return false;}
    return true;
}

function isValidFlag(flag){
    if (flag !== 0 && flag != 1){
        return false
    }
    return true
}

router.post('/register', (req, res) => {
    const { username, email, password, flag } = req.body;

    // validates the inputs
    if(!isValidName(username)){
        return res.status(400).json({ message: 'Invalid username' });
    }
    else if(!isValidEmail(email)){
        return res.status(400).json({ message: 'Invalid email' });
    }
    else if(!isValidPassword(password)){
        return res.status(400).json({ message: 'Invalid password' });
    }
    else if(!isValidFlag(flag)){
        return res.status(400).json({ message: 'Invalid flag' });
    }
    
    // find if email already exists, if not, create new user
    User.findOne({ email }).then(user => {
        if (user) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        const hashedPassword = bcrypt.hashSync(password, 10);
        const newUser = new User({
            user_flag: flag,
            name: username,
            email: email,
            password: hashedPassword,
        });
        console.log(newUser)
        newUser.save().then(() => {
            return res.status(201).json({ message: 'User created' });
        }).catch(err => {
            return res.status(400).json({ message: 'Error while trying to create new user' });
        });
    });
});
router.post('/login', async (req, res) => {
	const { email, password } = req.body;

	try {
		const logging_user = await User.findOne({ email });

		if (!logging_user) {
				return res.status(401).json({ message: 'Invalid email or password' });
		}

		const passwordMatch = bcrypt.compareSync(password, logging_user.password);

		if (!passwordMatch) {
				return res.status(401).json({ message: 'Invalid email or password' });
		}

		const tokenkey = process.env.TOKEN_KEY;
		const token = jwt.sign({ email: logging_user.email }, tokenkey);

		res.json({ token });
	} catch (error) {
        console.log(error)
		return res.status(500).json({ message: 'Internal server errors' });
	}
});

module.exports = router;