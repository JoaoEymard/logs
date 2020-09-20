const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan');

const app = express();

// Registrar log de acesso no console
app.use(logger('dev', {
    skip: function (req, res) { return res.statusCode < 400 }
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Redirecionando para api
app.use('/api', require('./src/index'));

module.exports = app;
