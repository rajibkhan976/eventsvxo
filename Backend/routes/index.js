const express = require('express');
const router = express.Router();

const event = require("./eventMethods.js");

router.post("/events", event.addEvent);
router.get("/events", event.getEvents);
router.patch("/events/:id", event.updateEventById)

module.exports = router;
