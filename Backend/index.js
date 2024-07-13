const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('./Database/config');
const User = require('./Database/User');

app.use(express.json());


app.post('/signin', async (req, res) => {
    try {
        const user = new User(req.body);
        const result = await user.save();
        res.status(201).send(result);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email, password });

        if (!user) {
            return res.status(404).send({ error: 'Invalid email or password' });
        }
        const { password: userPassword, ...userData } = user.toObject();
        res.send(userData);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});


app.listen(5000, () => {
    console.log(`Server is working on port 5000`);
});
