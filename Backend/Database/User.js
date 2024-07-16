const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String }
}, { timestamps: true, collection: 'person' });


module.exports = mongoose.model('Person', userSchema);
