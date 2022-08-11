const express = require('express');
const app = express();
const path = require('path');
port = 3000
const homeRouter = require('./routes/main');

app.listen(port, ()=>{console.log('Server running in http://localhost:' + port)});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRouter);

module.exports = app;