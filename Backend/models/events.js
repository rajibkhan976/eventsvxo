const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: String,
    start_date: {
      year: Number,
      month: Number,
      day: Number,
      time: String
    },
    end_date: {
      year: Number,
      month: Number,
      day: Number,
      time: String
    },
    location: String,
    price: String,
    category: String,
    tags: String,
    additional_info: String,
    host: String,
    img: String
});

const Events = mongoose.model('Events', eventSchema);

module.exports = Events;
