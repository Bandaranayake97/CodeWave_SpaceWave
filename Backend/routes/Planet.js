const express = require("express");
const Planet = require("../models/Planet");

const router = express.Router();

router.get("/planets", async (req, res) => {
  try {
    const planets = await Planet.findAll();
    res.status(200).json(planets);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching planets." });
  }
});

module.exports = router;
