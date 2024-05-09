const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
require("./db/Config");
const User = require("./db/User");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/register", async (req, res) => {
  console.log("Registered");
  let data = User(req.body);
  let result = await data.save();
  result = result.toObject();
  delete result.pass;
  res.send(result);
});
app.post("/login", async (req, res) => {
  if (req.body.pass && req.body.mail) {
    let user = await User.findOne(req.body).select("-pass");
    if (user) {
      res.send(user);
    } else {
      res.send({ result: "No such user found!" });
    }
  } else {
    res.send({ result: "No such user found!" });
  }
});

app.listen(5000);
