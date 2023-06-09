const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
var cors = require('cors');
var bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.options('*', cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const users = []; 

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.post('/api/register', (req, res) => {
  const { username, email, password } = req.body;

  if (!isValidEmail(email)) {
    return res.status(400).json({ message: 'Invalid email' });
  }
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'Email already exists' });
  }
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = { username, email, password: hashedPassword };
  users.push(newUser);

  res.status(201).json({ message: 'User registered successfully' });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(user => user.email === email);
  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);
  if (!passwordMatch) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const tokenkey = 'hjZ8N0z#6$B3!xVqJ@5cF';
  const token = jwt.sign({ email: user.email }, tokenkey);

  res.json({ token });
});

function isValidEmail(email) {
  const emailRegex = /^[a-z0-9]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

app.get('/api/shoppinglist', (req, res) => {
  // TODO: get shopping list
});

app.post('/api/userProfile', (req, res) => {
  // TODO: get user profile
});

app.listen(8080, () => console.log('Listening on port 8080'));
