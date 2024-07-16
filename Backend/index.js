const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const app = express();
const cors = require("cors");
require("./Database/config");
const User = require("./Database/User");
app.use(express.json());
app.use(cors());

app.post("/signup", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10); 
    const user = new User({ ...req.body, password: hashedPassword }); 
    const result = await user.save();
    const response = result.toObject();
    delete response.password; 
    res.status(201).send(response);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

app.post("/login", async (req, res) => {
  if (req.body.email && req.body.password) {
    let user = await User.findOne(req.body).select("-password"); 
    if (user) {
      res.send(user);
    } else {
      res.status(400).send({ error: "Invalid Credentials" });
    }
  } else {
    res.status(400).send({ error: "Invalid Credentials" });
  }
});

app.listen(5000, () => {
  console.log(`Server is working on port 5000`);
});
