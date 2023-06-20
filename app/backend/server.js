const express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const auth  = require('./src/routes/auth.js');
const product_list = require('./src/routes/product_list.js');
const user = require('./src/routes/user.js');

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.options('*', cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// MongoDB connection
const dbConfig = {
  url: process.env.MONGODB_URL,
  options: {
      useNewUrlParser: true
  }
};
mongoose.connect(dbConfig.url, dbConfig.options)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Routes
app.use('/auth', auth);
app.use('/product_list', product_list);
app.use('/user', user);


app.listen(process.env.PORT, () => console.log('Listening on port ' + process.env.PORT));
