const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Car = require("./models/post");

const app = express();

mongoose
  .connect(
    "mongodb+srv://krysteeeky:Butelka123@cluster0.agaectu.mongodb.net/RentCar?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to database"))
  .catch(() => console.log("connection failed"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.get("/cars", (req, res, next) => {
  if (req.query.town) {
    Car.find({
      town: req.query.town,
      dateStart: { $lte: req.query.dateStart },
      dateEnd: { $gte: req.query.dateEnd },
    }).then((cars) => {
      res.json(cars);
    });
  } else
    Car.find({}).then((cars) => {
      res.json(cars);
    });
});

app.get("/cars/:id", (req, res, next) => {
  Car.find({ _id: req.params.id }).then((car) => res.json(car));
});

module.exports = app;
