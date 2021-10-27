const express = require('express');

const app = express();
const router = express.Router();

app.set('view engine', 'ejs');
app.use(express.static('public'));

const homeRoute = require('./routes/home-route');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', homeRoute);

module.exports = app;
