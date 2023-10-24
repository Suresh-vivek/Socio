const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema({
  ngoid: String,
  ngoname: String,

  email: String,
  password: String,
  address: String,
});

const LoginModel = mongoose.model("credentials", LoginSchema);

module.exports = LoginModel;
