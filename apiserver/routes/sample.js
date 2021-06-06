const express = require('express');
const router = express.Router();
const Sample = require("../db/models/sample")


router.get("/list-samples", async (req, res, next) => {
  try {
    const samples = await Sample.find({})
    res.send(samples);
  } catch (err) {
    console.log(err);
  }
})

router.post("/add-sample", async (req, res, next) => {
  try {
    const { name, amount, is_available } = req.body;
    const sample = new Sample(
      {
        name: name, 
        amount: amount, 
        is_available: is_available
      }
    );
    await sample.save();
    res.send("success")
  } catch (err) {
    console.log(err);
  }
})

router.get("/get-sample/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const sample = await Sample.findById(id)
    res.send(sample);
  } catch (err) {
    console.log(err);
  }
})

router.put("/save-sample/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await Sample.findByIdAndUpdate(id, req.body, { runValidators: true, new: true, useFindAndModify: false });
    res.send(true);
  } catch (err) {
    console.log(err);
  }
})

router.delete("/delete-sample/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await Sample.findByIdAndDelete(id);
    res.send(true)
  } catch (err) {
    console.log(err);
  }
})

module.exports = router;
