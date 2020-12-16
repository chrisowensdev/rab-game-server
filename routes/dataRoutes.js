const express = require('express');
const router = express.Router();

const homeruns = require('../homerun');
const mvp = require('../mvpdata');

router.get('/homeruns', async (req, res) => {
    res.json(homeruns);
});

router.get('/mvp', async (req, res) => {
    res.json(mvp);
});

module.exports = router;
