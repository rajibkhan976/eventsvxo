getEvents = (req, res, next) => {
  var query;
  if (req.query.category) {
    query = req.models.Events.find({ category: req.query.category })
  } else {
    query = req.models.Events.find()
  }
  query.exec().then((event) => {
    return res.send(event);
  }).catch((error) => {
    next(error)
  })
}

getById = (req, res, next) => {
  req.models.Events.findById(req.params.id).then((event) => {
    return res.send(event)
  }).catch((error) => {
    next(error)
  })
}

addEvent = (req, res, next) => {
  req.models.Events.create({
    title: req.body.title,
    start_date: {
      year: req.body.start_date.year,
      month: req.body.start_date.month,
      day: req.body.start_date.day,
      time: req.body.start_date.time
    },
    end_date: {
      year: req.body.end_date.year,
      month: req.body.end_date.month,
      day: req.body.end_date.day,
      time: req.body.end_date.time
    },
    location: req.body.location,
    price: req.body.price,
    category: req.body.category,
    tags: req.body.tags,
    additional_info: req.body.additional_info,
    host: req.body.host,
    img: req.body.img
  }).then((event) => {
    return res.status(201).send(event);
  }).catch((error) => {
    next(error);
  })
}

updateEventById = (req, res, next) => {
  req.models.Events.updateOne({_id: req.params.id}, {
    title: req.body.title,
    start_date: {
      year: req.body.start_date.year,
      month: req.body.start_date.month,
      day: req.body.start_date.day,
      time: req.body.start_date.time
    },
    end_date: {
      year: req.body.end_date.year,
      month: req.body.end_date.month,
      day: req.body.end_date.day,
      time: req.body.end_date.time
    },
    location: req.body.location,
    price: req.body.price,
    category: req.body.category,
    tags: req.body.tags,
    additional_info: req.body.additional_info,
    host: req.body.host,
    img: req.body.img
  }, {
    new: true,
    upsert: true,
    runvalidators: true
  }).then((status) => {
    if (status.upserted) {
      res.status(201);
    } else if (status.nModified) {
      res.status(200);
    } else {
      res.status(204);
    }
    res.send();
  }).catch((error) => {
    next(error);
  })
}

deleteEvent = (req, res, next) => {
  req.models.Events.findByIdAndDelete(
    req.params.id
  ).then((event) => {
    if (event)
      return res.status(200).send(`${event.title} has been removed`)
    res.sendStatus(204)
  }).catch((error) => {
    next(error)
  })
}

module.exports = {
  addEvent,
  getEvents,
  getById,
  updateEventById,
  deleteEvent
};
