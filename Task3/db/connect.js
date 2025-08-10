require('dotenv').config();

const mongoose = require('mongoose');

const dbconeect = () => {
    mongoose.connect(process.env.MONGO_URI);
}

module.exports = dbconeect;