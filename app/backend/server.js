const express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const auth  = require('./src/routes/auth.js');
const product_list = require('./src/routes/product_list.js');
const user_profile = require('./src/routes/user_profile.js');

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
  url: 'mongodb://vencinapromo:pIUApr9IgXyU5kuJ@ac-hbr3vyy-shard-00-00.qdta2rn.mongodb.net:27017,ac-hbr3vyy-shard-00-01.qdta2rn.mongodb.net:27017,ac-hbr3vyy-shard-00-02.qdta2rn.mongodb.net:27017/?ssl=true&replicaSet=atlas-7ygtub-shard-0&authSource=admin&retryWrites=true&w=majority',
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
app.use('/user_profile', user_profile);


app.listen(8080, () => console.log('Listening on port 8080'));
