const express = require('express');
const router = express.Router();

const event = require("./eventMethods.js");

router.get("/events", event.getEvents);
router.get("/events/:id", event.getById)
router.post("/events", event.addEvent);
router.patch("/events/:id", event.updateEventById);
router.delete("/events/:id", event.deleteEvent);

module.exports = router;
