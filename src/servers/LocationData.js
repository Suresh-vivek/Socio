const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
  ngoid: { type: String },
  ngoaddress: { type: String },
  ngophone: { type: String },
  age: { type: String },
  subjects: [{ type: String }],
  ngoimage: {
    data: Buffer,
    contentType: String,
  },
  detectlocation: {
    latitude: { type: String },
    longitude: { type: String },
  },
});

const LocationModel = mongoose.model("locations", LocationSchema);

module.exports = LocationModel;
