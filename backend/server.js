const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const UserSchema = require("./schema.js");

const app = express();

app.use(express.json());
mongoose
  .connect(process.env.mongo_url)
  .then(() => console.log("conneted to database"))
  .catch((err) => console.log("Error connecting to database", err));

app.get("/", (req, res) => {
  res.send("connhjghki");
});

app.post("/store", async (req, res) => {
  try {
    const { store, place, item } = req.body;

    const newUser = new User({ store, place, item });
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
});


app.get("/store", async (req, res) => {
  try {
    
    const stores = await User.find()
    res.status(201).json({ message: stores });
  } catch (error) {
    console.log(error)
    res.status(500).json("internal server error");
  }
});


app.get("/store/:id", async (req, res) => {
  try {
    let id=req.params.id
    const store = await User.findById(id)
    res.status(201).json({ message: store });
  } catch (error) {
    console.log(error)
    res.status(500).json("internal server error");
  }
});



app.listen(pro, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
