const express = require("express");
const cors = require("cors");
const swaggerUi = require('swagger-ui-express');

const routes = require("./routes");
const db = require("./models");

const app = express();

const port = process.env.PORT || 2000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((error, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    res.status(error.statusCode || error.status || 500).send({ error: error });
})

app.use(cors());

app.use((error, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(error.statusCode || error.status || 500).send({error: error});
});

app.use((req, res, next) => {
    req.models = db.models;
    next();
});

var options = {
    explorer: true,
    editor: true,
    swaggerOptions: {
        urls: [
            {
                url: '/eventsvxo.yaml',
                name: 'eventsvxo'
            }
        ]
    }
};

app.use('/', express.static(__dirname + '/swagger'));
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(null, options));
app.use('/', routes);

if (process.env.NODE_ENV != 'test') {
  db.connectDb().then(() => {
      const listener = app.listen(port, () => {
          console.info(`Server is listening on port ${listener.address().port}`);
      })
  }).catch((error) => {
    console.error(error);
  });
}

module.exports = app;
