'use strict';

const http = require('http');
const bodyParser = require('body-parser');

const hostname = '127.0.0.1';
const PORT = process.env.PORT || 3333;

const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const MLBBoxscores = require('mlbboxscores');

const connectDB = require('./config/db.js');
connectDB();

const cors = require('cors');

const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
};

const app = express();
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);
app.use(cors(corsOptions));

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('API running...');
});

const userRouters = require('./routes/userRoutes');
const dataRoutes = require('./routes/dataRoutes');

app.use('/users', userRouters);
app.use('/data', dataRoutes);
