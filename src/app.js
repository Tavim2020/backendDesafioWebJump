const express = require("express");
const path = require('path');

const routes  = require('./routes/routes');


const app = express();


const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use('/public', express.static(path.join(__dirname, '..', 'public')));
app.use('/api', express.static(path.join(__dirname, '.', 'mock-api')));
app.use(routes);


const PORT = process.env.PORT || 8888;

app.listen(8888, function() {
    console.log('Acesse: http://localhost:8888');
});
