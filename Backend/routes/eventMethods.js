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

module.exports = {
  addEvent
};
