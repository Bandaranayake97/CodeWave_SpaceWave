const express = require("express");
const Agency = require("../models/Agency");

const router = express.Router();

router.get("/agencies", async (req, res) => {
  try {
    const agencies = await Agency.findAll();
    res.status(200).json(agencies);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching agencies." });
  }
});

module.exports = router;
