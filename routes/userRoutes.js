const express = require('express');
const router = express.Router();

const User = require('../models/userModel');

router.get('/', async (req, res) => {
    const users = await User.find({});
    res.json(users);
});

router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
});

router.post('/', async (req, res) => {
    const user = await User.create(req.body);
    res.json(user);
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    console.log(username);
    if (user && (await user.matchPassword(password))) {
        const userPorfile = await User.findById(user.id).select('-password');
        res.json(userPorfile);
    } else {
        res.json({ msg: 'Username or password is incorrect' });
    }
});

module.exports = router;
