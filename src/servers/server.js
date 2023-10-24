const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const LoginModel = require("./LoginData");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://Svivek:22i22e11@cluster0.tdbke2r.mongodb.net/Login"
);

app.post("/register", (req, res) => {
  LoginModel.create(req.body)
    .then((credential) => res.json(credential))
    .catch((err) => res.status(500).json(err));
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  LoginModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("Invalid Credentials");
      }
    } else {
      res.json("No records existed");
    }
  });
});

app.listen(3004, () => {
  console.log("Server is running on port 3004");
});
