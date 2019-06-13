const express = require('express');
const router = express.Router();

const event = require("./eventMethods.js");

router.post("/events", event.addEvent);

module.exports = router;
