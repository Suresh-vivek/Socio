const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const LoginModel = require("./LoginData");
const LocationModel = require("./LocationData");

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(cors());

const multer = require("multer");
const dotenv = require("dotenv");
dotenv.config();

const upload = multer({ dest: "uploads/" });

//For sending ContactUs form data to email

// Use async/await for database connection
async function connectToDatabase() {
  try {
    await mongoose.connect(
      "mongodb+srv://Svivek:22i22e11@cluster0.tdbke2r.mongodb.net/Login",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}

connectToDatabase();

// Signup form data
app.post("/register", (req, res) => {
  LoginModel.create(req.body)
    .then((credential) => res.json(credential))
    .catch((err) => res.status(500).json(err));
});


app.post("/locations", upload.single("image"), (req, res) => {
  LocationModel.create(req.body)
    .then((location) => res.json(location))
    .catch((err) => res.status(500).json(err));
});

// Login form data
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  LoginModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json({ message: "Success", ngoname: user.ngoname });
      } else {
        res.json({ message: "Invalid Credentials" });
      }
    } else {
      res.json("No records existed");
    }
  });
});

app.listen(3004, () => {
  console.log("Server is running on port 3004");
});
