const express = require('express');
const path = require('path');
const logger = require('morgan');
require('dotenv').config();
require('./config/database');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

app.use(require('./config/checkToken'));
const port = process.env.PORT || 3001;

app.use('/api/decks', require('./routes/api/decks'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/sets', require('./routes/api/sets'));
app.use('/api/cards', require('./routes/api/cards'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, function() {
  console.log(`Express app running on port ${port}`);
});

