const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    
})

const Events = mongoose.model('Events', eventSchema)

module.exports = Events;