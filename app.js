const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(express.json());
app.use(cors());
// app.use(morgan());
app.use(helmet())

app.get('/', (req, res) => {
    res.send('sanity check')
});

module.exports = app