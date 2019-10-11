const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors');

const app = express();

require('dotenv').config();
require('./config/database');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());

// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

//Put API routes here
app.use('/api/users', require('./routes/api/users'));
app.use('/api/inventory', require('./routes/api/inventories'));
// app.use('/api/grocery', require('./routes/api/groceries'));

app.use(require('./config/auth'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Express app is running on port ${port}`)
});