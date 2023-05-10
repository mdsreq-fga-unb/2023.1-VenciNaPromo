
const express = require('express');
var cors = require('cors');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
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

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/api/login', (req, res) => {
  // TODO: login user
});

app.get('/api/register', (req, res) => {
  // TODO: register user
});

app.get('/api/shoppinglist', (req, res) => {
  // TODO: get shopping list
});

app.post('/api/userProfile', (req, res) => {
  // TODO: get user profile
});

app.listen(8080, () => console.log('Listening on port 8080'));
