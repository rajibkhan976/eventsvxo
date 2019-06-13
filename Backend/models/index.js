const mongoose = require('mongoose');
const Events = require('./events.js');

const uri = process.env.DATABASE_URL || "mongodb://localhost:27017/eventsvxo"

const connectDb = () => {
    return mongoose.connect(uri, { useNewUrlParser: true });
}

module.exports = {
    connectDb,
    models: {
        Events
    }
}
