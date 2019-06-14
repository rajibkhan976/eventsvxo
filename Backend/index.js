const express = require("express");
const cors = require("cors");

const routes = require("./routes");
const db = require("./models");

const app = express();

const port = process.env.PORT || 2000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use((req, res, next) => {
    req.models = db.models;
    next();
});

app.use('/', routes);

db.connectDb().then(() => {
    const listener = app.listen(port, () => {
        console.info(`Server is listening on port ${listener.address().port}`);
    })
});

module.exports = app;
