const mongoose = require('mongoose');
const {model} = require("mongoose");

const carSchema = mongoose.Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: String, required: true },
  img: { type: String, required: true },
  description: { type: String, required: true},
  engine: { type: String, required: true},
  power: { type: String, required: true},
  time: { type: String, required: true},
  maxspeed: { type: String, required: true},
  dateStart: { type: String, required: true },
  dateEnd: { type: String, required: true },
  town: { type: String, required: true },
});

module.exports = model('Car', carSchema);

