const express = require('express');
const app = express();
const cors = require('cors')
const favicon = require('express-favicon');
const path = require('path');
const db = require('./db');

app.use(cors("*"));
app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
const UserController = require('./controller/userController');
app.use('/users', UserController);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'))
})

module.exports = app;
