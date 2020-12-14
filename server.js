'use strict';

const http = require('http');
const bodyParser = require('body-parser');

const hostname = '127.0.0.1';
const PORT = process.env.PORT || 3333;

const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./config/db.js');
connectDB();

const app = express();

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('API running...');
});
